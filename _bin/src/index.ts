import { generateTables } from './services/tableMarkdown';
import { PLUGINS_PATH, ROOT_README_PATH } from './constants';
import { ValidationError } from './types/errors';
import { validatePath } from './utils/errors';
import path from 'path';
import fs from 'fs';
import { withErrorHandling } from './utils/compose';

const command = process.argv[ 2 ];
const target = process.argv[ 3 ];

const mainBase = (): void => {
	if ( command === 'generate' ) {
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
	} else {
		throw new ValidationError(
			'Unknown command. Use "generate", "generate all", or "generate <plugin-name>"'
		);
	}
};

const main = withErrorHandling( mainBase );

main();
