import { registerSlotFillWithPluginDocumentSettingPanel } from './slotfill-PluginDocumentSettingPanel-2fb190';
import { registerSlotFillWithPluginSidebar } from './slotfill-PluginSidebar-2fb190';

const slotFillExamples = {
	PluginSidebar: registerSlotFillWithPluginSidebar,
	PluginDocumentSettingPanel: registerSlotFillWithPluginDocumentSettingPanel,
};

const { slotFill2FB190ExampleLoad } = window;

if ( slotFill2FB190ExampleLoad ) {
	console.log( 'individualExample', slotFill2FB190ExampleLoad );
	slotFillExamples[ slotFill2FB190ExampleLoad ]();
} else {
	console.log( 'running all Examples' );
	for ( const example in slotFillExamples ) {
		slotFillExamples[ example ]();
	}
}
