/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';

const ExamplePluginDocumentSettingPanel = () => {
	// Get post type.
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	// Get the value of meta and a function for updating meta from useEntityProp.
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	// Define which post meta key to read from/save to.
	const metaKey = 'example_meta_field';

	/**
	 * A helper function for getting post meta by key.
	 *
	 * @param {string} key - The meta key to read.
	 * @return {*} - Meta value.
	 */
	const getPostMeta = ( key ) => meta[ key ] || '';

	/**
	 * A helper function for updating post meta that accepts a meta key and meta
	 * value rather than entirely new meta object.
	 *
	 * Important! Don't forget to register_post_meta (see ../index.php).
	 *
	 * @param {string} key   - The meta key to update.
	 * @param {*}      value - The meta value to update.
	 */
	const setPostMeta = ( key, value ) =>
		setMeta( {
			...meta,
			[ key ]: value,
		} );

	return (
		<PluginDocumentSettingPanel
			name="example-07-slotfills-esnext"
			title={ __( 'Example Meta Box', 'block-development-examples' ) }
			className="example-07-slotfills-esnext"
			icon={
				<svg xmlns="http://www.w3.org/2000/svg">
					<circle r="10" cx="10" cy="10" fill="red" />
				</svg>
			}
		>
			<TextControl
				label={ __(
					'Example Meta Field',
					'block-development-examples'
				) }
				value={ getPostMeta( metaKey ) }
				onChange={ ( value ) => setPostMeta( metaKey, value ) }
			/>
		</PluginDocumentSettingPanel>
	);
};

export const registerSlotFillWithPluginDocumentSettingPanel = () => {
	registerPlugin( 'slotfill-plugindocumentsettingpanel', {
		render: ExamplePluginDocumentSettingPanel,
	} );
};
