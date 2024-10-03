import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { EditInspectorControls } from './inspectorControls';

export default function Edit( props ) {
	const blockProps = useBlockProps();
	return (
		<>
			<EditInspectorControls { ...props } />
			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</>
	);
}
