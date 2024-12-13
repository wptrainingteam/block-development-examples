import { join } from 'path';
import fs from 'fs';
import { Example, Tag } from '../types/example';

interface ExamplesPerTag {
	[ key: string ]: Example[];
}

export class DataPreparationService {
	private readonly rootPath: string;
	private readonly examplesJsonPath: string;
	private readonly tagsJsonPath: string;

	constructor( rootPath: string ) {
		this.rootPath = rootPath;
		this.examplesJsonPath = join( rootPath, '_data/examples.json' );
		this.tagsJsonPath = join( rootPath, '_data/tags.json' );
	}

	public prepareData(): ExamplesPerTag {
		const examplesJson = this.readExamplesJson();
		const tagsJson = this.readTagsJson();

		return this.groupExamplesByTag( examplesJson, tagsJson );
	}

	private readExamplesJson(): Example[] {
		return JSON.parse( fs.readFileSync( this.examplesJsonPath, 'utf8' ) );
	}

	private readTagsJson(): Tag[] {
		return JSON.parse( fs.readFileSync( this.tagsJsonPath, 'utf8' ) );
	}

	private groupExamplesByTag(
		examples: Example[],
		tagList: Tag[]
	): ExamplesPerTag {
		return tagList.reduce( ( acc: ExamplesPerTag, { slug } ) => {
			acc[ slug ] = examples.filter( ( example ) =>
				example.tags.includes( slug )
			);
			return acc;
		}, {} );
	}
}
