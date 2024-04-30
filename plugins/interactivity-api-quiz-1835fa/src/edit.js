import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	ToggleGroupControl as ToggleGroupControl,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	ToggleGroupControlOption as ToggleGroupControlOption,
	TextControl,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<>
			<div { ...useBlockProps() }>
				<div>
					<strong>
						{ __( 'Question', 'block-development-examples' ) }
					</strong>
					<RichText
						value={ attributes.question }
						tagname="p"
						placeholder={ __(
							'Write your question here',
							'block-development-examples'
						) }
						onChange={ ( value ) =>
							setAttributes( { question: value } )
						}
					/>
				</div>
			</div>

			<InspectorControls>
				<PanelBody
					title={ __(
						'Quiz Configuration',
						'block-development-examples'
					) }
				>
					<ToggleGroupControl
						label={ __(
							'Type of quiz',
							'block-development-examples'
						) }
						value={ attributes.typeOfQuiz }
						help={ __(
							'Choose the type of quiz that you want to use.',
							'block-development-examples'
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
							label={ __(
								'Yes/No',
								'block-development-examples'
							) }
						/>
						<ToggleGroupControlOption
							value="input"
							label={ __(
								'Text Input',
								'block-development-examples'
							) }
						/>
					</ToggleGroupControl>

					{ attributes.typeOfQuiz === 'boolean' && (
						<ToggleGroupControl
							label={ __(
								'Answer',
								'block-development-examples'
							) }
							value={ attributes.answer }
							help={ __(
								'Choose the correct answer for your quiz.',
								'block-development-examples'
							) }
							onChange={ ( value ) =>
								setAttributes( { answer: value } )
							}
							isBlock
						>
							<ToggleGroupControlOption
								value={ true }
								label={ __(
									'Yes',
									'block-development-examples'
								) }
							/>
							<ToggleGroupControlOption
								value={ false }
								label={ __(
									'No',
									'block-development-examples'
								) }
							/>
						</ToggleGroupControl>
					) }

					{ attributes.typeOfQuiz === 'input' && (
						<TextControl
							__nextHasNoMarginBottom
							label={ __(
								'Answer',
								'block-development-examples'
							) }
							value={ attributes.answer }
							placeholder={ __(
								'Write the answer here',
								'block-development-examples'
							) }
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
