import { TableGenerationConfig } from '../types/config';
import { ValidationError } from '../types/errors';

export const validateConfig = ( config: TableGenerationConfig ): void => {
	if ( ! config.readmePath ) {
		throw new ValidationError( 'readmePath is required in configuration' );
	}

	if ( config.slug && typeof config.slug !== 'string' ) {
		throw new ValidationError( 'slug must be a string when provided' );
	}

	if ( ! config.readmePath.endsWith( '.md' ) ) {
		throw new ValidationError( 'readmePath must point to a markdown file' );
	}
};
