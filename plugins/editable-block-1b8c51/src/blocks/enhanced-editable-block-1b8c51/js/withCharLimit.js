import useCharLimit from './useCharLimit';

const withCharLimit = ( Component ) => {
	return ( props ) => {
		const { value: content, onChange } = props;
		const { charCount, errorMessage, handleContentChange } = useCharLimit(
			content,
			onChange
		);

		const progressBarStyle = {
			width: `${ ( charCount / 100 ) * 100 }%`,
			height: '5px',
			backgroundColor: charCount > 100 ? 'red' : 'green',
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
				<div className="char-count">{ charCount } / 100</div>
			</>
		);
	};
};

export default withCharLimit;
