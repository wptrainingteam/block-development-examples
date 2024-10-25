/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Disabled, PanelBody, TextControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Settings', 'block-development-examples' ) }
				>
					<TextControl
						label={ __( 'Label', 'block-development-examples' ) }
						value={ attributes.label }
						onChange={ ( label ) => setAttributes( { label } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<Disabled>
					<ServerSideRender
						skipBlockSupportAttributes
						block="block-development-examples/server-side-render-block-d26119"
						attributes={ attributes }
					/>
				</Disabled>
			</div>
		</>
	);
}
