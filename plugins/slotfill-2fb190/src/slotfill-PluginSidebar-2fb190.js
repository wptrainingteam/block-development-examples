import { __ } from '@wordpress/i18n';
import { PluginSidebar } from '@wordpress/editor';
import {
	PanelBody,
	Button,
	TextControl,
	SelectControl,
} from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { useState } from '@wordpress/element';

const PluginSidebarExample = () => {
	const [ text, setText ] = useState( '' );
	const [ select, setSelect ] = useState( 'a' );

	return (
		<PluginSidebar
			name="plugin-sidebar-example"
			title={ __( 'My PluginSidebar', 'block-development-examples' ) }
			icon={
				<svg xmlns="http://www.w3.org/2000/svg">
					<circle r="10" cx="10" cy="10" fill="red" />
				</svg>
			}
		>
			<PanelBody>
				<h2>
					{ __(
						'This is a heading for the PluginSidebar example.',
						'block-development-examples'
					) }
				</h2>
				<p>
					{ __(
						'This is some example text for the PluginSidebar example.',
						'block-development-examples'
					) }
				</p>
				<TextControl
					label={ __( 'Text Control', 'block-development-examples' ) }
					value={ text }
					onChange={ ( newText ) => setText( newText ) }
				/>
				<SelectControl
					label={ __(
						'Select Control',
						'block-development-examples'
					) }
					value={ select }
					options={ [
						{ value: 'a', label: 'Option A' },
						{ value: 'b', label: 'Option B' },
						{ value: 'c', label: 'Option C' },
					] }
					onChange={ ( newSelect ) => setSelect( newSelect ) }
				/>
				<Button variant="primary">
					{ __( 'Primary Button', 'block-development-examples' ) }{ ' ' }
				</Button>
			</PanelBody>
		</PluginSidebar>
	);
};

export const registerSlotFillWithPluginSidebar = () => {
	registerPlugin( 'slotfill-pluginsidebar', {
		render: PluginSidebarExample,
	} );
};
