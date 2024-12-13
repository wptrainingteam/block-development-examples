import { readJsonFile, readTextFile, writeFile } from '../utils/fileOperations';
import { Example, Tag } from '../types/example';
import { info } from '../utils/logging';
import {
	EXAMPLES_DATA_PATH,
	TAGS_DATA_PATH,
	URL_WIKI,
	URL_REPO,
	URL_ASSETS,
	URL_EXAMPLE_ZIP,
	URL_PLAYGROUND_BLUEPRINT,
	WIKI_PAGE_TAGS,
	WIKI_PAGE_WHY_ID,
	SLUG_EXAMPLE_MARKER,
} from '../constants';
import { validatePath, validateRequiredData } from '../utils/errors';
import { withErrorHandling } from '../utils/compose';

// Base function without error handling
function generateTablesBase( readmePath: string ): void {
	info( `📝 Updating ${ readmePath }...` );
	validatePath( readmePath );

	const examples = readJsonFile< Example[] >( EXAMPLES_DATA_PATH );
	const tags = readJsonFile< Tag[] >( TAGS_DATA_PATH );

	validateRequiredData( examples, 'No examples data found' );
	validateRequiredData( tags, 'No tags data found' );

	let content = readTextFile( readmePath );
	const tableContent = generateTableContent( examples, tags );
	content = replaceTableContent( content, tableContent );

	writeFile( readmePath, content );
	info( `✅ Updated ${ readmePath }` );
}

// Composed function with error handling
export const generateTables = withErrorHandling( generateTablesBase );

function generateTableContent( examples: Example[], tags: Tag[] ): string {
	const tableRows = examples
		.map( ( example ) => {
			const tagLinks = example.tags
				.map(
					( tag ) =>
						`<small><code><a href="${ URL_WIKI }/${ WIKI_PAGE_TAGS }#${ tag.toLowerCase() }">${ tag }</a></code></small>`
				)
				.join( ' ' );

			// Replace the marker in URLs with the actual folder name
			const exampleZipUrl = URL_EXAMPLE_ZIP.replace(
				SLUG_EXAMPLE_MARKER,
				example.folder
			);
			const playgroundBlueprintUrl = URL_PLAYGROUND_BLUEPRINT.replace(
				SLUG_EXAMPLE_MARKER,
				example.folder
			);
			const repoFolderUrl = `${ URL_REPO }/plugins/${ example.folder }`;

			return (
				`| [📁](${ repoFolderUrl }) | ` +
				`${ example.description } | ` +
				`${ tagLinks } | ` +
				`\`${ example.id }\` | ` +
				`[📦](${ exampleZipUrl } "Install the plugin using this zip and activate it. Then use the ID of the block (${ example.id }) to find it and add it to a post to see it in action") | ` +
				`[![](${ URL_ASSETS }/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=${ playgroundBlueprintUrl } "Use the ID of the block (${ example.id }) to find it and add it to a post to see it in action") |`
			);
		} )
		.join( '\n' );

	const header = `| Folder | <span style="display: inline-block; width:250px">Short description</span> | Tags | ID ([❓](${ URL_WIKI }/${ WIKI_PAGE_WHY_ID } "Why an ID for every example?")) | Download .zip | Live Demo |`;
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
