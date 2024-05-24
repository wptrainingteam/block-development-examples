import { useBlockProps, RichText } from '@wordpress/block-editor';
import withCharLimit from './withCharLimit';
const RichTextWithCharLimit = withCharLimit( RichText );

const Edit = ( props ) => {
	const {
		attributes: { content },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	return (
		<div { ...blockProps }>
			<RichTextWithCharLimit
				tagName="p"
				onChange={ onChangeContent }
				value={ content }
			/>
		</div>
	);
};
export default Edit;
