import { error } from './logging';

/**
 * Composes a function with error handling
 * @param fn The function to compose with error handling
 */
export const withErrorHandling = < T extends ( ...args: any[] ) => any >(
	fn: T
): T => {
	return ( ( ...args: Parameters< T > ): ReturnType< T > => {
		try {
			return fn( ...args );
		} catch ( err ) {
			error( `❌ ${ ( err as Error ).message }` );
			process.exit( 1 );
			throw err; // TypeScript needs this even though we exit
		}
	} ) as T;
};
