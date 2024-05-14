/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import {
	Modal,
	RadioControl,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { useEntityProp } from '@wordpress/core-data';
import { useCommand } from '@wordpress/commands';
import { blockMeta } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './index.scss';

/**
 * Toggle the Preset Manager.
 *
 * Adds a sidebar button in the Post Editor and a Command Palette command.
 */
function MetaModalManager() {
	const [ isModalOpen, setModalOpen ] = useState( false );
	const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' );

	// Register a command for the Command Palette.
	useCommand( {
		name: 'manage-post-meta',
		label: __( 'Manage Post Meta', 'block-development-examples' ),
		icon: blockMeta,
		callback: () => setModalOpen( true ),
		context: 'block-editor',
	} );

	return (
		<>
			<PluginMoreMenuItem
				icon={ blockMeta }
				onClick={ () => setModalOpen( true ) }
			>
				{ __( 'Manage Post Meta', 'block-development-examples' ) }
			</PluginMoreMenuItem>
			{ isModalOpen && (
				<Modal
					className="post_meta_modal_2502fb_container"
					title={ __(
						'Manage Post Meta',
						'block-development-examples'
					) }
					onRequestClose={ () => setModalOpen( false ) }
					size="large"
				>
					<TextControl
						label={ __(
							'Text Field',
							'block-development-examples'
						) }
						value={ meta?.post_meta_modal_2502fb_text_field || '' }
						onChange={ ( newValue ) =>
							setMeta( {
								...meta,
								post_meta_modal_2502fb_text_field: newValue,
							} )
						}
					/>
					<RadioControl
						label={ __(
							'Radio Field',
							'block-development-examples'
						) }
						selected={
							meta?.post_meta_modal_2502fb_radio_field || ''
						}
						options={ [
							{
								label: 'Option A',
								value: 'a',
							},
							{
								label: 'Option B',
								value: 'b',
							},
							{
								label: 'Option C',
								value: 'c',
							},
						] }
						onChange={ ( newValue ) =>
							setMeta( {
								...meta,
								post_meta_modal_2502fb_radio_field: newValue,
							} )
						}
					/>
					<SelectControl
						label={ __(
							'Select Field',
							'block-development-examples'
						) }
						value={
							meta?.post_meta_modal_2502fb_select_field || ''
						}
						options={ [
							{
								disabled: true,
								label: 'Select an Option',
								value: '',
							},
							{
								label: 'Option A',
								value: 'a',
							},
							{
								label: 'Option B',
								value: 'b',
							},
							{
								label: 'Option C',
								value: 'c',
							},
						] }
						onChange={ ( newValue ) =>
							setMeta( {
								...meta,
								post_meta_modal_2502fb_select_field: newValue,
							} )
						}
					/>
				</Modal>
			) }
		</>
	);
}

registerPlugin( 'block-development-examples-post-meta-modal-2502fb', {
	render: MetaModalManager,
} );
