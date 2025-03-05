import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************************************!*\
  !*** ./src/blocks/quiz-progress-1835fa/view.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('quiz-1835fa-project-store', {
  state: {
    get isOpen() {
      const {
        id
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return state.selected === id;
    },
    get toggleText() {
      return state.isOpen ? state.closeText : state.openText;
    },
    get isActive() {
      const {
        id,
        thisAnswer
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return state.quizzes[id].current === thisAnswer;
    },
    get inputAnswer() {
      const {
        id
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return state.quizzes[id].current || '';
    }
  },
  actions: {
    toggle() {
      const {
        id
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (state.selected === id) {
        state.selected = null;
      } else {
        state.selected = id;
      }
    },
    closeOnEsc(event) {
      if (event.key === 'Escape') {
        state.selected = null;
        const {
          ref
        } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
        ref.querySelector('button[aria-controls^="quiz-"]').focus();
      }
    },
    answerBoolean() {
      const {
        id,
        thisAnswer
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const quiz = state.quizzes[id];
      if (quiz.current !== thisAnswer) {
        quiz.current = thisAnswer;
      } else {
        quiz.current = null;
      }
    },
    answerInput(event) {
      const {
        id
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      state.quizzes[id].current = event.target.value || null;
    }
  },
  callbacks: {
    focusOnOpen() {
      if (state.isOpen) {
        const {
          ref
        } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
        ref.focus();
      }
    }
  }
});
})();


//# sourceMappingURL=view.js.map