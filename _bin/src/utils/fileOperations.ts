import fs from 'fs';
import { join } from 'path';
import { Example, Tag } from '../types/example';
import { FileOperationError } from '../types/errors';

export const readJsonFile = < T >( path: string ): T => {
	try {
		const content = fs.readFileSync( path, 'utf8' );
		return JSON.parse( content );
	} catch ( err ) {
		if ( err instanceof Error ) {
			throw new FileOperationError( 'read', path, err );
		}
		throw err;
	}
};

export const writeFile = ( path: string, content: string ): void => {
	try {
		fs.writeFileSync( path, content );
	} catch ( err ) {
		if ( err instanceof Error ) {
			throw new FileOperationError( 'write', path, err );
		}
		throw err;
	}
};

export const getExamplesData = ( rootPath: string ): Example[] => {
	const path = join( rootPath, '_data/examples.json' );
	try {
		return readJsonFile( path );
	} catch ( err ) {
		if ( err instanceof Error ) {
			throw new FileOperationError( 'read examples', path, err );
		}
		throw err;
	}
};

export const getTagsData = ( rootPath: string ): Tag[] => {
	const path = join( rootPath, '_data/tags.json' );
	try {
		return readJsonFile( path );
	} catch ( err ) {
		if ( err instanceof Error ) {
			throw new FileOperationError( 'read tags', path, err );
		}
		throw err;
	}
};
