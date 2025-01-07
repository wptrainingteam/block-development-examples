import { execSync } from 'child_process';
import * as path from 'path';
import { Example } from '../types/example';
import { withErrorHandling } from '../utils/compose';
import { readJsonFile, writeFile } from '../utils/fileOperations';
import { PLUGINS_PATH, EXAMPLES_DATA_PATH } from '../constants';

export class DatesService {
	private examples: Example[];

	constructor() {
		this.examples = [];
	}

	private async loadExamples(): Promise< void > {
		this.examples = await readJsonFile( EXAMPLES_DATA_PATH );
	}

	private getGitDates( pluginPath: string ): {
		created: string;
		lastModified: string;
	} {
		// Get first commit date
		const createdCommand = `git log --reverse --format=%aI -- ${ pluginPath } | head -n 1`;
		const created = execSync( createdCommand, {
			encoding: 'utf8',
		} ).trim();

		// Get last commit date
		const lastModifiedCommand = `git log -1 --format=%aI -- ${ pluginPath }`;
		const lastModified = execSync( lastModifiedCommand, {
			encoding: 'utf8',
		} ).trim();

		return {
			created,
			lastModified,
		};
	}

	private async processExample( example: Example ): Promise< void > {
		const pluginPath = path.join( PLUGINS_PATH, example.slug );

		try {
			const dates = this.getGitDates( pluginPath );
			example.created = dates.created;
			example.lastModified = dates.lastModified;
		} catch ( error ) {
			console.error(
				`Error processing dates for ${ example.slug }:`,
				error
			);
		}
	}

	private async saveExamples(): Promise< void > {
		await writeFile(
			EXAMPLES_DATA_PATH,
			JSON.stringify( this.examples, null, '\t' ) + '\n'
		);
	}

	public async updateDates(): Promise< void > {
		await this.loadExamples();

		for ( const example of this.examples ) {
			await this.processExample( example );
		}

		await this.saveExamples();
	}
}

// Create error-handled version of the service methods
export const datesService = {
	updateDates: withErrorHandling( async () => {
		const service = new DatesService();
		await service.updateDates();
	} ),
};
