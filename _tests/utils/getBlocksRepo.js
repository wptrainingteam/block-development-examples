const fs = require( 'fs' );
const path = require( 'path' );

function getNamesBlocksFromBlockJsonFiles( directories ) {
	let names = [];
	directories.forEach( ( dir ) => {
		const files = fs.readdirSync( dir );

		files.forEach( ( file ) => {
			const filePath = path.join( dir, file );
			const stats = fs.statSync( filePath );

			if ( stats.isDirectory() ) {
				if ( file === 'src' ) {
					const srcFiles = fs.readdirSync( filePath );

					srcFiles.forEach( ( srcFile ) => {
						if ( srcFile === 'block.json' ) {
							const blockFilePath = path.join(
								filePath,
								srcFile
							);
							const content = fs.readFileSync(
								blockFilePath,
								'utf8'
							);
							const json = JSON.parse( content );
							if ( json.name ) {
								names.push( json.name );
							}
						}
					} );
				} else {
					names = names.concat(
						getNamesBlocksFromBlockJsonFiles( [ filePath ] )
					);
				}
			}
		} );
	} );

	return names;
}

module.exports = getNamesBlocksFromBlockJsonFiles;
