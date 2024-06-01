( function ( blocks, blockEditor, element ) {
	const el = element.createElement;
	const { useBlockProps, RichText } = blockEditor;

	const Edit = ( props ) => {
		const {
			attributes: { content },
			setAttributes,
		} = props;

		const blockProps = useBlockProps();

		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		return el(
			RichText,
			{
				...blockProps,
				tagName: 'p',
				onChange: onChangeContent,
				value: content,
			},
			''
		);
	};

	const save = ( props ) => {
		const {
			attributes: { content },
		} = props;
		const blockProps = useBlockProps.save();

		return el(
			RichText.Content,
			{
				...blockProps,
				tagName: 'p',
				value: content,
			},
			''
		);
	};

	blocks.registerBlockType(
		'block-development-examples/basic-editable-block-no-build-1b8c51',
		{
			edit: Edit,
			save,
		}
	);
} )( window.wp.blocks, window.wp.blockEditor, window.wp.element );
