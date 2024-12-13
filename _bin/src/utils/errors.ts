import { FileOperationError, ValidationError } from '../types/errors';

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
