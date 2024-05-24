/* eslint-disable */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	TextControl,
} from '@wordpress/components';
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

			<InspectorControls>
				<PanelBody title={ __( 'Quiz Configuration' ) }>
					<ToggleGroupControl
						label={ __( 'Type of quiz' ) }
						value={ attributes.typeOfQuiz }
						help={ __(
							'Choose the type of quiz that you want to use.'
						) }
						onChange={ ( value ) => {
							const newAttributes = { typeOfQuiz: value };
							newAttributes.answer =
								value === 'boolean' ? true : '';
							setAttributes( newAttributes );
						} }
						isBlock
					>
						<ToggleGroupControlOption
							value="boolean"
							label={ __( 'Yes/No' ) }
						/>
						<ToggleGroupControlOption
							value="input"
							label={ __( 'Text Input' ) }
						/>
					</ToggleGroupControl>

					{ attributes.typeOfQuiz === 'boolean' && (
						<ToggleGroupControl
							label={ __( 'Answer' ) }
							value={ attributes.answer }
							help={ __(
								'Choose the correct answer for your quiz.'
							) }
							onChange={ ( value ) =>
								setAttributes( { answer: value } )
							}
							isBlock
						>
							<ToggleGroupControlOption
								value={ true }
								label={ __( 'Yes' ) }
							/>
							<ToggleGroupControlOption
								value={ false }
								label={ __( 'No' ) }
							/>
						</ToggleGroupControl>
					) }

					{ attributes.typeOfQuiz === 'input' && (
						<TextControl
							__nextHasNoMarginBottom
							label={ __( 'Answer' ) }
							value={ attributes.answer }
							placeholder={ __( 'Write the answer here' ) }
							onChange={ ( value ) =>
								setAttributes( { answer: value } )
							}
						/>
					) }
				</PanelBody>
			</InspectorControls>
		</>
	);
}
