import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
	Button,
	PanelBody,
	PanelRow,
	// eslint-disable-next-line
	__experimentalInputControl as InputControl,
} from '@wordpress/components';

/**
 * Renders the inspector controls for the block.
 *
 * @param {Object}   props               - The component props.
 * @param {Object}   props.attributes    - The block' attributes.
 * @param {Function} props.setAttributes - The function to set block attributes.
 * @return {JSX.Element} The rendered inspector controls.
 */

export const EditInspectorControls = ( props ) => {
	const { attributes, setAttributes } = props;

	const [ next, setNext ] = useState( attributes.next || '' );
	const [ prev, setPrev ] = useState( attributes.prev || '' );

	return (
		<InspectorControls>
			<PanelBody
				title={ __(
					'Next and Prev Links',
					'block-development-examples'
				) }
				initialOpen={ true }
			>
				<PanelRow>
					<InputControl
						label="Next Link"
						value={ next }
						onChange={ setNext }
					/>
				</PanelRow>
				<PanelRow>
					<InputControl
						label="Prev Link"
						value={ prev }
						onChange={ setPrev }
					/>
				</PanelRow>
				<PanelRow>
					<Button
						variant="primary"
						label={ __(
							'Save data',
							'block-development-examples'
						) }
						onClick={ () => {
							setAttributes( { next, prev } );
						} }
						icon="update"
						iconPosition="left"
					>
						{ __(
							'Save Prev and Next Links',
							'block-development-examples'
						) }
					</Button>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};
