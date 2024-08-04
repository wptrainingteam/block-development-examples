import { registerSlotFillWithPluginDocumentSettingPanel } from './slotfill-PluginDocumentSettingPanel-2fb190';
import { registerSlotFillWithPluginSidebar } from './slotfill-PluginSidebar-2fb190';

const slotFillExamples = {
	PluginSidebar: registerSlotFillWithPluginSidebar,
	PluginDocumentSettingPanel: registerSlotFillWithPluginDocumentSettingPanel,
};

const { individualExample } = window;

if ( individualExample ) {
	console.log( 'individualExample', individualExample );
	slotFillExamples[ individualExample ]();
} else {
	console.log( 'running all Examples' );
	for ( const example in slotFillExamples ) {
		slotFillExamples[ example ]();
	}
}
