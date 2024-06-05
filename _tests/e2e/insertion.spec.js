import { test, expect } from '@wordpress/e2e-test-utils-playwright';
import getNamesBlocksFromBlockJsonFiles from '../utils/getBlocksRepo';

import { plugins } from '../../.wp-env.json';
const pluginsPathsToTest = plugins.filter( ( plugin ) =>
	plugin.includes( 'plugins' )
);
const blocksRepo = getNamesBlocksFromBlockJsonFiles( pluginsPathsToTest );

test.describe( 'Block added to block editor', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.createNewPost();
	} );

	blocksRepo.forEach( async ( block ) => {
		test( block, async ( { editor } ) => {
			await editor.insertBlock( { name: block } );
			expect( await editor.getEditedPostContent() ).toContain(
				`<!-- wp:${ block }`
			);
		} );
	} );
} );
