/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { TextControl, PanelBody } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';

const MetaBlockField = () => {
	const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' );
	return (
		<PanelBody>
			<TextControl
				label="Meta Block Field"
				value={ meta?.sidebar_plugin_meta_block_field || "" }
				onChange={ ( newValue ) =>
					setMeta( {
						...meta,
						sidebar_plugin_meta_block_field: newValue,
					} )
				}
			/>
		</PanelBody>
	);
};

registerPlugin( 'plugin-sidebar-9ee4a6', {
	render: () => (
		<PluginSidebar>
			<MetaBlockField />
		</PluginSidebar>
	),
} );
