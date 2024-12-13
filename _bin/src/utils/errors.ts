import {
	BaseError,
	FileOperationError,
	ValidationError,
} from '../types/errors';
import { error } from './logging';

/**
 * Handles operational errors (expected errors) by logging them and exiting gracefully
 * @param err - The error to handle
 */
export const handleOperationalError = ( err: Error ): void => {
	if ( err instanceof BaseError ) {
		error( `❌ ${ err.message }` );
		process.exit( 1 );
	}
	throw err; // Re-throw programming errors
};

/**
 * Wraps an async function with error handling
 * @param operation - The async operation to execute
 */
export const withErrorHandling = async < T >(
	operation: () => Promise< T >
): Promise< T > => {
	try {
		return await operation();
	} catch ( err ) {
		handleOperationalError( err as Error );
		throw err; // TypeScript needs this even though handleOperationalError exits
	}
};

/**
 * Wraps a sync function with error handling
 * @param operation - The sync operation to execute
 */
export const withSyncErrorHandling = < T >( operation: () => T ): T => {
	try {
		return operation();
	} catch ( err ) {
		handleOperationalError( err as Error );
		throw err;
	}
};

/**
 * Validates that a path exists and is accessible
 * @param path - The file path to validate
 */
export const validatePath = ( path: string ): void => {
	try {
		require( 'fs' ).accessSync( path );
	} catch ( err ) {
		throw new FileOperationError(
			'access',
			path,
			new Error( 'Path does not exist or is not accessible' )
		);
	}
};

/**
 * Validates that required data is present
 * @param data    - The data to validate
 * @param message - The error message if validation fails
 */
export const validateRequiredData = < T >(
	data: T | null | undefined,
	message: string
): void => {
	if ( ! data ) {
		throw new ValidationError( message );
	}
};
