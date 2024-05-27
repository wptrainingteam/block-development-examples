import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

function useCharLimit( content = '', onChange ) {
	const [ charCount, setCharCount ] = useState( content?.length ?? 0 );
	const [ errorMessage, setErrorMessage ] = useState( '' );

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

	useEffect( () => {
		if ( content ) {
			handleContentChange( content );
		}
	} );

	return { charCount, errorMessage, handleContentChange };
}

export default useCharLimit;
