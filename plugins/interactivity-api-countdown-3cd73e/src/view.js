import { store, getContext } from '@wordpress/interactivity';

store( 'interactivity-api-countdown-3cd73e__store', {
	state: {
		get seconds() {
			const { remaining } = getContext();
			return remaining % 60;
		},
		get minutes() {
			const { remaining } = getContext();
			return Math.floor( remaining / 60 ) % 60;
		},
		get hours() {
			const { remaining } = getContext();
			return Math.floor( remaining / 3600 ) % 24;
		},
		get days() {
			const { remaining } = getContext();
			return Math.floor( remaining / 86400 );
		},
	},
	callbacks: {
		startCountdown: () => {
			console.log( 'startCountdown...' ); // eslint-disable-line no-console
			const context = getContext();
			const { days, hours, minutes, seconds } = context;
			context.remaining =
				days * 86400 + hours * 3600 + minutes * 60 + seconds;
			// Update remaining time (in seconds).
			const n = setInterval( () => {
				context.remaining -= 1;
				if ( context.remaining === 0 ) {
					clearInterval( n );
				}
			}, 1000 );
		},
	},
} );
