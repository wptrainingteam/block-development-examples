import { store, getContext, getElement } from '@wordpress/interactivity';

const { state } = store( 'quiz-1835fa-project-store', {
	state: {
		get isOpen() {
			const { id: quizId } = getContext();
			return state.selected === quizId;
		},
		get toggleText() {
			return state.isOpen ? state.closeText : state.openText;
		},
		get isActive() {
			const { id: quizId, thisAnswer } = getContext();
			return state.quizzes[ quizId ].current === thisAnswer;
		},
		get inputAnswer() {
			const { id: quizId } = getContext();
			return state.quizzes[ quizId ].current || '';
		},
	},
	actions: {
		toggle: () => {
			const { id: quizId } = getContext();
			if ( state.selected === quizId ) {
				state.selected = null;
			} else {
				state.selected = quizId;
			}
		},
		closeOnEsc: ( event ) => {
			const { ref } = getElement();
			if ( event.key === 'Escape' ) {
				state.selected = null;
				ref.querySelector( 'button[aria-controls^="quiz-"]' ).focus();
			}
		},
		answerBoolean: () => {
			const { id: quizId, thisAnswer } = getContext();
			const quiz = state.quizzes[ quizId ];
			quiz.current = quiz.current !== thisAnswer ? thisAnswer : null;
		},
		answerInput: ( event ) => {
			const { id: quizId } = getContext();
			state.quizzes[ quizId ].current = event.target.value || null;
		},
	},
	callbacks: {
		focusOnOpen: () => {
			const { ref } = getElement();
			if ( state.isOpen ) {
				ref.focus();
			}
		},
	},
} );
