// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { NumberControl as NumberControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = ( { attributes, setAttributes } ) => (
	<>
		<div { ...useBlockProps() }>
			<p>React Counter</p>
			<span>Initial value</span>
			<NumberControl
				placeholder="Enter the initial value"
				value={ attributes.initial }
				onChange={ ( val ) => setAttributes( { initial: val } ) }
			/>
			<span>Incremental value</span>
			<NumberControl
				placeholder="Enter the incremental value"
				value={ attributes.increment }
				onChange={ ( val ) => setAttributes( { increment: val } ) }
			/>
		</div>
	</>
);

export default Edit;
