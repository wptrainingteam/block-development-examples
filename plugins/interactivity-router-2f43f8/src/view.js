import { store } from '@wordpress/interactivity';

const { state } = store( 'router-2f43f8', {
	state: {
		urlRegionDisplay: window.location.href,
		get urlRegionDisplaySlug() {
			const { pathname } = new URL( state.urlRegionDisplay );
			const isHome = pathname === '/';
			return isHome
				? '/'
				: '/' + pathname.split( '/' ).filter( Boolean ).pop();
		},
	},
	actions: {
		*navigate( e ) {
			e.preventDefault();
			const { actions } = yield import(
				'@wordpress/interactivity-router'
			);
			state.urlRegionDisplay = e.target.href;
			yield actions.navigate( state.urlRegionDisplaySlug );
		},
	},
} );
