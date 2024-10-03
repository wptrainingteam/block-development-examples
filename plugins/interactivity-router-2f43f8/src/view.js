import { store } from '@wordpress/interactivity';

const { state } = store( 'router-2f43f8', {
	state: {
		urlPathname: '',
		urlRegionDisplay: window.location.href,
		get urlRegionDisplaySlug() {
			const isHome = state.urlPathname === '/';
			return isHome
				? '/'
				: '/' + state.urlPathname.split( '/' ).filter( Boolean ).pop();
		},
		get isPlayground() {
			return state.urlPathname.includes( 'scope' );
		},
	},
	callbacks: {
		setUrlPathname: () => {
			state.urlPathname = new URL( state.urlRegionDisplay ).pathname;
		},
	},
	actions: {
		*navigate( e ) {
			console.log( 'navigate', e );
			e.preventDefault();
			const { actions } = yield import(
				'@wordpress/interactivity-router'
			);
			state.urlRegionDisplay = e.target.href;
			yield actions.navigate( state.urlRegionDisplaySlug );
		},
	},
} );
