import { ValidationError } from './types/errors';
import { withErrorHandling } from './utils/compose';

const command = process.argv[ 2 ];
const target = process.argv[ 3 ];

const mainBase = async (): Promise< void > => {
	if ( command === 'generate' ) {
		// Lazy load table generation functionality
		const { generateTables } = await import( './services/tableMarkdown' );
		const { validatePath } = await import( './utils/errors' );
		const { PLUGINS_PATH, ROOT_README_PATH } = await import(
			'./constants'
		);
		const path = await import( 'path' );
		const fs = await import( 'fs' );

		if ( ! target ) {
			validatePath( ROOT_README_PATH );
			generateTables( ROOT_README_PATH );
		} else if ( target === 'all' ) {
			validatePath( ROOT_README_PATH );
			generateTables( ROOT_README_PATH );

			const pluginFolders = fs
				.readdirSync( PLUGINS_PATH )
				.filter( ( folder ) =>
					fs
						.statSync( path.join( PLUGINS_PATH, folder ) )
						.isDirectory()
				);

			pluginFolders.forEach( ( folder ) => {
				const readmePath = path.join(
					PLUGINS_PATH,
					folder,
					'README.md'
				);
				validatePath( readmePath );
				generateTables( readmePath );
			} );
		} else {
			const pluginPath = path.join( PLUGINS_PATH, target, 'README.md' );
			validatePath( pluginPath );
			generateTables( pluginPath );
		}
	} else if ( command === 'dates' ) {
		const { datesService } = await import( './services/DatesService' );
		await datesService.updateDates();
	} else {
		throw new ValidationError(
			'Unknown command. Use "generate", "generate all", "generate <plugin-name>", "contributors", or "dates"'
		);
	}
};

const main = withErrorHandling( mainBase );

main().catch( ( error: Error ) => {
	console.error( 'Error:', error );
	process.exit( 1 );
} );
