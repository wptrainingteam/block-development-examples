import { useState, useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

function useCharLimit( content = '', onChange, limit ) {
	const [ charCount, setCharCount ] = useState( content?.length ?? 0 );
	const [ errorMessage, setErrorMessage ] = useState( '' );

	const handleContentChange = ( value ) => {
		setCharCount( value.length );
		if ( value.length > limit ) {
			setErrorMessage(
				sprintf(
					/* translators: %d: maximum number of character allowed */
					__(
						`Character limit exceeded. Please enter no more than %d characters.`,
						'block-development-examples'
					),
					limit
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
	}, [] );

	return { charCount, errorMessage, handleContentChange };
}

export default useCharLimit;
