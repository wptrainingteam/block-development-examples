import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const withCharLimit = ( Component ) => {
	return ( props ) => {
		const { value: content, onChange } = props;

		const [ errorMessage, setErrorMessage ] = useState( '' );
		const [ charCount, setCharCount ] = useState(
			props.content?.length ?? 0
		);

		const handleContentChange = ( value ) => {
			setCharCount( value.length );
			if ( value.length > 100 ) {
				setErrorMessage(
					__(
						'Character limit exceeded. Please enter no more than 100 characters.',
						'block-development-examples'
					)
				);
			} else {
				setErrorMessage( '' );
				onChange( value );
			}
		};

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
