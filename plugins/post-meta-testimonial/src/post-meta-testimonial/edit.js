/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   props
 * @param {Object}   props.attributes
 * @param {Function} props.setAttributes
 * @param {Object}   props.context
 * @param {string}   props.context.postType
 * @param {number}   props.context.postId
 * @param {string}   props.attributes.authorName
 * @param {string}   props.attributes.authorURL
 * @return {WPElement} Element to render.
 */
export default function Edit( {
	attributes: { authorName, authorURL },
	setAttributes,
	context: { postId, postType },
} ) {
	const [ meta, updateMeta ] = useEntityProp(
		'postType',
		postType,
		'meta',
		postId
	);

	const { testimonial } = meta;
	return (
		<blockquote { ...useBlockProps() }>
			<RichText
				placeholder={ __(
					'Testimonial goes here',
					'block-development-examples'
				) }
				tagName="p"
				value={ testimonial }
				onChange={ ( newTestimonialContent ) =>
					updateMeta( {
						...meta,
						testimonial: newTestimonialContent,
					} )
				}
			/>
			<cite>
				<RichText
					tagName="span"
					placeholder={ __(
						'Author name',
						'block-development-examples'
					) }
					allowedFormats={ [] }
					disableLineBreaks
					value={ authorName }
					onChange={ ( newAuthorName ) =>
						setAttributes( { authorName: newAuthorName } )
					}
				/>
				<br />
				<span>
					<RichText
						tagName="a"
						placeholder={ __(
							'Author URL',
							'block-development-examples'
						) }
						allowedFormats={ [] }
						disableLineBreaks
						value={ authorURL }
						onChange={ ( newAuthorURL ) =>
							setAttributes( { authorURL: newAuthorURL } )
						}
					/>
				</span>
			</cite>
		</blockquote>
	);
}
