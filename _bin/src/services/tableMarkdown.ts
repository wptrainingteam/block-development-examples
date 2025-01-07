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
	APP_URL_WITH_TAGS,
	SLUG_EXAMPLE_MARKER,
} from '../constants';
import { validatePath, validateRequiredData } from '../utils/errors';
import { withErrorHandling } from '../utils/compose';

// Base function without error handling
function generateTablesBase( readmePath: string, targetSlug?: string ): void {
	info( `📝 Updating ${ readmePath }...` );
	validatePath( readmePath );

	const examples = readJsonFile< Example[] >( EXAMPLES_DATA_PATH );
	const tags = readJsonFile< Tag[] >( TAGS_DATA_PATH );

	validateRequiredData( examples, 'No examples data found' );
	validateRequiredData( tags, 'No tags data found' );

	// Filter examples if a target slug is provided
	const filteredExamples = targetSlug
		? examples.filter( ( example ) => example.slug === targetSlug )
		: examples;

	validateRequiredData(
		filteredExamples.length,
		`No example found with slug: ${ targetSlug }`
	);

	let content = readTextFile( readmePath );
	const tableContent = generateTableContent( filteredExamples, tags );
	content = replaceTableContent( content, tableContent );

	writeFile( readmePath, content );
	info( `✅ Updated ${ readmePath }` );
}

// Composed function with error handling
export const generateTables = withErrorHandling( generateTablesBase );

function generateTableContent( examples: Example[], tags: Tag[] ): string {
	const tableRows = examples
		.map( ( example ) => {
			const exampleFolder = example.slug; // Fallback to slug if folder is not
			const tagLinks = example.tags
				.map(
					( tag ) =>
						`<small><code><a href="${ APP_URL_WITH_TAGS }${ tag.toLowerCase() }">${ tag }</a></code></small>`
				)
				.join( ' ' );

			// Replace the marker in URLs with the actual folder name
			const exampleZipUrl = URL_EXAMPLE_ZIP.replace(
				SLUG_EXAMPLE_MARKER,
				exampleFolder
			);
			const playgroundBlueprintUrl = URL_PLAYGROUND_BLUEPRINT.replace(
				SLUG_EXAMPLE_MARKER,
				exampleFolder
			);
			const repoFolderUrl = `${ URL_REPO }/plugins/${ exampleFolder }`;

			return (
				`| [${ example.name }](${ repoFolderUrl }) | ` +
				`${ example.description } | ` +
				`${ tagLinks } | ` +
				`[📦](${ exampleZipUrl } "Install the plugin on any WordPress site using this zip and activate it to see the example in action") | ` +
				`[![](${ URL_ASSETS }/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=${ playgroundBlueprintUrl } "Click here to access a live demo of this example" ) |`
			);
		} )
		.join( '\n' );

	const header = `| Example | <span style="display: inline-block; width:250px">Description</span> | Tags |Download .zip | Live Demo |`;
	const separator =
		'| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |';

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
