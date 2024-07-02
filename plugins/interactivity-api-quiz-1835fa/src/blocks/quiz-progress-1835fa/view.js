/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from "@wordpress/interactivity";

const { state } = store("quiz-1835fa-project-store", {
  state: {
    get isOpen() {
      const { id } = getContext();
      return state.selected === id;
    },
    get toggleText() {
      return state.isOpen ? state.closeText : state.openText;
    },
    get isActive() {
      const { id, thisAnswer } = getContext();
      return state.quizzes[id].current === thisAnswer;
    },
    get inputAnswer() {
      const { id } = getContext();
      return state.quizzes[id].current || "";
    },
  },
  actions: {
    toggle() {
      const { id } = getContext();

      if (state.selected === id) {
        state.selected = null;
      } else {
        state.selected = id;
      }
    },
    closeOnEsc(event) {
      if (event.key === "Escape") {
        state.selected = null;
        const { ref } = getElement();
        ref.querySelector('button[aria-controls^="quiz-"]').focus();
      }
    },
    answerBoolean() {
      const { id, thisAnswer } = getContext();
      const quiz = state.quizzes[id];

      if (quiz.current !== thisAnswer) {
        quiz.current = thisAnswer;
      } else {
        quiz.current = null;
      }
    },
    answerInput(event) {
      const { id } = getContext();
      state.quizzes[id].current = event.target.value || null;
    },
  },
  callbacks: {
    focusOnOpen() {
      if (state.isOpen) {
        const { ref } = getElement();
        ref.focus();
      }
    },
  },
});
