/* eslint-disable */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import EditControls from './editControls';
import './editor.css';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<>
			<div { ...useBlockProps() }>
				<div>
					<strong>
						{ __( 'Question', 'block-development-examples' ) }:{ ' ' }
					</strong>
					<RichText
						value={ attributes.question }
						tagname="p"
						placeholder={ __( 'Write your question here' ) }
						onChange={ ( value ) =>
							setAttributes( { question: value } )
						}
					/>
				</div>
			</div>

			<EditControls { ...{ attributes, setAttributes } } />
		</>
	);
}
