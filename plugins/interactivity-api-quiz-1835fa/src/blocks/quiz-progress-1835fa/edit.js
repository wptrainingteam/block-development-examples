/* eslint-disable */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<div>
				<strong>
					{ __( 'Exercises', 'block-development-examples' ) }:{ ' ' }
				</strong>{ ' ' }
				3
			</div>
			<div>
				<strong>
					{ __( 'Answered', 'block-development-examples' ) }:{ ' ' }
				</strong>{ ' ' }
				0
			</div>
			<hr />
			<InnerBlocks />
		</div>
	);
}
