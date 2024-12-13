import fs from 'fs';
import path from 'path';
import { EXAMPLES_DATA_PATH, TAGS_DATA_PATH } from '../constants';

interface Example {
	id: string;
	title: string;
	description: string;
	tags: string[];
	folder: string;
}

interface Tag {
	id: string;
	title: string;
	description: string;
}

export function generateTables( readmePath: string ) {
	// Read examples and tags data
	const examples: Example[] = JSON.parse(
		fs.readFileSync( EXAMPLES_DATA_PATH, 'utf8' )
	);
	const tags: Tag[] = JSON.parse( fs.readFileSync( TAGS_DATA_PATH, 'utf8' ) );

	// Read the README file
	let content = fs.readFileSync( readmePath, 'utf8' );

	// Generate table content
	const tableContent = generateTableContent( examples, tags );

	// Replace content between markers
	content = replaceTableContent( content, tableContent );

	// Write back to file
	fs.writeFileSync( readmePath, content );
}

function generateTableContent( examples: Example[], tags: Tag[] ): string {
	const tableRows = examples
		.map( ( example ) => {
			const tagLinks = example.tags
				.map(
					( tag ) =>
						`<small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#${ tag.toLowerCase() }">${ tag }</a></code></small>`
				)
				.join( ' ' );

			return `| [📁](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/${ example.folder }) | ${ example.description } | ${ tagLinks } | \`${ example.id }\` | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/${ example.folder }.zip "Install the plugin using this zip and activate it. Then use the ID of the block (${ example.id }) to find it and add it to a post to see it in action") | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/${ example.folder }/_playground/blueprint.json "Use the ID of the block (${ example.id }) to find it and add it to a post to see it in action") |`;
		} )
		.join( '\n' );

	const header =
		'| Folder | <span style="display: inline-block; width:250px">Short description</span> | Tags | ID ([❓](https://github.com/WordPress/block-development-examples/wiki/04-Why-an-ID-for-every-example%3F "Why an ID for every example?")) | Download .zip | Live Demo |';
	const separator =
		'| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |';

	return `${ header }\n${ separator }\n${ tableRows }`;
}

function replaceTableContent( content: string, tableContent: string ): string {
	const startMarker = '<!-- @TABLE EXAMPLES BEGIN -->';
	const endMarker = '<!-- @TABLE EXAMPLES END -->';

	const startIndex = content.indexOf( startMarker );
	const endIndex = content.indexOf( endMarker );

	if ( startIndex === -1 || endIndex === -1 ) {
		return content;
	}

	return (
		content.substring( 0, startIndex + startMarker.length ) +
		'\n' +
		tableContent +
		'\n' +
		content.substring( endIndex )
	);
}
