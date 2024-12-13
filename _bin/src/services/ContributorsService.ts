import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { Example } from '../types/example';
import { withErrorHandling } from '../utils/compose';
import { readJsonFile, writeFile } from '../utils/fileOperations';
import { PLUGINS_PATH, EXAMPLES_DATA_PATH } from '../constants';

export class ContributorsService {
	private examples: Example[];

	constructor() {
		this.examples = [];
	}

	private async loadExamples(): Promise< void > {
		this.examples = await readJsonFile( EXAMPLES_DATA_PATH );
	}

	private getContributors( pluginPath: string ): string[] {
		const gitCommand = `git log --format='%ae' -- ${ pluginPath } | sort -u`;
		const output = execSync( gitCommand, { encoding: 'utf8' } );

		return output
			.split( '\n' )
			.filter( Boolean )
			.map( ( email ) => email.replace( /'/g, '' ) );
	}

	private async processExample( example: Example ): Promise< void > {
		const pluginPath = path.join( PLUGINS_PATH, example.slug );

		if ( fs.existsSync( pluginPath ) ) {
			try {
				example.contributors = this.getContributors( pluginPath );
			} catch ( error ) {
				console.error( `Error processing ${ example.slug }:`, error );
			}
		}
	}

	private async saveExamples(): Promise< void > {
		await writeFile(
			EXAMPLES_DATA_PATH,
			JSON.stringify( this.examples, null, '\t' ) + '\n'
		);
	}

	public async updateContributors(): Promise< void > {
		await this.loadExamples();

		for ( const example of this.examples ) {
			await this.processExample( example );
		}

		await this.saveExamples();
	}
}

// Create error-handled version of the service methods
export const contributorsService = {
	updateContributors: withErrorHandling( async () => {
		const service = new ContributorsService();
		await service.updateContributors();
	} ),
};
