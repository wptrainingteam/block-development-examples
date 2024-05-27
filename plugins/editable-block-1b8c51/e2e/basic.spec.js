/**
 * WordPress dependencies
 */
import {
	getEditedPostContent,
	insertBlock,
	createNewPost,
	getAllBlockInserterItemTitles,
	activatePlugin,
	deactivatePlugin,
} from '@wordpress/e2e-test-utils';

/**
 * Internal dependencies
 */
import json from '../src/blocks/basic-editable-block-1b8c51/block.json';
const { title, name } = json;

describe( `"${ title }" block`, () => {
	beforeAll( async () => {
		await activatePlugin(
			'block-development-examples-editable-block-1b8c51'
		);
	} );

	beforeEach( async () => {
		await createNewPost();
	} );

	afterAll( async () => {
		await deactivatePlugin(
			'block-development-examples-editable-block-1b8c51'
		);
	} );

	it( `-- should be available to be inserted`, async () => {
		const blocksAvailable = await getAllBlockInserterItemTitles();
		console.log( blocksAvailable );

		expect( true ).toBe( true );
	} );

	it( `should be available to be inserted`, async () => {
		//await createNewPost();
		await insertBlock( title );

		expect( page.$( `[data-type="${ name }"]` ) ).not.toBeNull();

		const editedPostContent = await getEditedPostContent();
		const regExFindComments = /<!--(.*)-->/g;
		const commentsEditedPostContent =
			editedPostContent.match( regExFindComments );

		expect( commentsEditedPostContent[ 0 ] ).toBe(
			`<!-- wp:${ name } -->`
		);
		expect( commentsEditedPostContent[ 1 ] ).toBe(
			`<!-- /wp:${ name } -->`
		);

		const regExFindClasses = /class="(.*)"/g;
		const classesEditedPostContent =
			regExFindClasses.exec( editedPostContent );

		expect( classesEditedPostContent[ 1 ] ).toBe(
			`wp-block-${ name.replace( '/', '-' ) }`
		);
	} );
} );
