import { store } from '@wordpress/interactivity';

const { state } = store( 'quiz-1835fa-project-store', {
	state: {
		get answered() {
			return Object.values( state.quizzes ).filter(
				( v ) => v.current !== null
			).length;
		},
		get allAnswered() {
			return state.answered === Object.keys( state.quizzes ).length;
		},
		get correct() {
			return state.showAnswers
				? Object.values( state.quizzes ).filter(
						( v ) => v.current === v.correct
				  ).length
				: '?';
		},
		get allCorrect() {
			return state.correct === Object.keys( state.quizzes ).length;
		},
		get totalQuizzes() {
			return Object.values( state.quizzes ).length;
		},
	},
	actions: {
		checkAnswers: () => {
			state.showAnswers = true;
			state.selected = null;
		},
		reset: () => {
			state.showAnswers = false;
			Object.values( state.quizzes ).forEach( ( quiz ) => {
				quiz.current = null;
			} );
		},
	},
} );
