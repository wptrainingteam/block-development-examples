import { generateTables } from './services/tableMarkdown';
import { PLUGINS_PATH } from './constants';
import path from 'path';
import fs from 'fs';

const command = process.argv[ 2 ];
const target = process.argv[ 3 ];

if ( command === 'generate' ) {
	if ( target === 'all' ) {
		// Generate for root README and all plugin READMEs
		generateTables( 'README.md' ); // Root README

		// Get all plugin folders
		const pluginFolders = fs
			.readdirSync( PLUGINS_PATH )
			.filter( ( folder ) =>
				fs.statSync( path.join( PLUGINS_PATH, folder ) ).isDirectory()
			);

		// Generate for each plugin
		pluginFolders.forEach( ( folder ) => {
			generateTables( path.join( PLUGINS_PATH, folder, 'README.md' ) );
		} );
	} else {
		// Generate for specific plugin
		const pluginPath = path.join( PLUGINS_PATH, target, 'README.md' );
		if ( fs.existsSync( pluginPath ) ) {
			generateTables( pluginPath );
		} else {
			console.error( `Plugin ${ target } not found` );
		}
	}
} else {
	console.error(
		'Unknown command. Use "generate all" or "generate <plugin-name>"'
	);
}
