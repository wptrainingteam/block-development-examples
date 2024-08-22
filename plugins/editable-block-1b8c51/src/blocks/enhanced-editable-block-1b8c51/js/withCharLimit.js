import useCharLimit from './useCharLimit';

const withCharLimit = ( limit ) => ( Component ) => {
	return ( props ) => {
		const { value: content, onChange } = props;
		const { charCount, errorMessage, handleContentChange } = useCharLimit(
			content,
			onChange,
			limit
		);

		const colorState = charCount > limit ? 'red' : 'green';

		const progressBarStyle = {
			width: `${ ( charCount / limit ) * limit }%`,
			height: '5px',
			backgroundColor: colorState,
			marginTop: '5px',
		};

		return (
			<>
				<Component
					{ ...props }
					onChange={ handleContentChange }
					value={ content }
				/>
				{ errorMessage && (
					<div className="error-message" style={ { color: 'red' } }>
						{ errorMessage }
					</div>
				) }
				<div className="progress-bar" style={ progressBarStyle }></div>
				<div className="char-count" style={ { color: colorState } }>
					{ charCount } / { limit }
				</div>
			</>
		);
	};
};

export default withCharLimit;
