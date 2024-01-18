/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\n\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler);\n    addressForm.addEventListener('submit', this.findAddressHandler);\n  }\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature is not available in your current browser version - please use a more modern browser or manually enter an address');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait');\n    modal.show();\n    navigator.geolocation.getCurrentPosition(successResult => {\n      modal.hide();\n      console.log(successResult);\n      const coordinates = {\n        lat: successResult.coords.latitude,\n        lng: successResult.coords.longitude\n      };\n      console.log(coordinates);\n    }, error => {\n      modal.hide();\n      alert('Could not locate you unfortunately. Please enter an address manually');\n    });\n  }\n  findAddressHandler() {}\n}\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcyIsIm1hcHBpbmdzIjoiOztBQUFtQztBQUVuQyxNQUFNQyxXQUFXLENBQUM7RUFDaEJDLFdBQVdBLENBQUEsRUFBRztJQUNaLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ2xELE1BQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBRTNERCxhQUFhLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLGlCQUFpQixDQUFDO0lBQy9ETixXQUFXLENBQUNLLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNFLGtCQUFrQixDQUFDO0VBQ2pFO0VBRUFELGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2xCLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxXQUFXLEVBQUU7TUFDMUJDLEtBQUssQ0FDSCxtSUFDRixDQUFDO01BQ0Q7SUFDRjtJQUVBLE1BQU1DLEtBQUssR0FBRyxJQUFJZCw0Q0FBSyxDQUNyQix1QkFBdUIsRUFDdkIsZ0NBQ0YsQ0FBQztJQUNEYyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBRVpKLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDSSxrQkFBa0IsQ0FDckNDLGFBQWEsSUFBSztNQUNqQkgsS0FBSyxDQUFDSSxJQUFJLENBQUMsQ0FBQztNQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsYUFBYSxDQUFDO01BQzFCLE1BQU1JLFdBQVcsR0FBRztRQUNsQkMsR0FBRyxFQUFFTCxhQUFhLENBQUNNLE1BQU0sQ0FBQ0MsUUFBUTtRQUNsQ0MsR0FBRyxFQUFFUixhQUFhLENBQUNNLE1BQU0sQ0FBQ0c7TUFDNUIsQ0FBQztNQUNEUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDO0lBQzFCLENBQUMsRUFDQU0sS0FBSyxJQUFLO01BQ1RiLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLENBQUM7TUFDWkwsS0FBSyxDQUNILHNFQUNGLENBQUM7SUFDSCxDQUNGLENBQUM7RUFDSDtFQUVBSCxrQkFBa0JBLENBQUEsRUFBRyxDQUFDO0FBQ3hCO0FBRUEsTUFBTWtCLFdBQVcsR0FBRyxJQUFJM0IsV0FBVyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZXMwMS8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL1VJL01vZGFsJztcclxuXHJcbmNsYXNzIFBsYWNlRmluZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IGFkZHJlc3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgY29uc3QgbG9jYXRlVXNlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGUtYnRuJyk7XHJcblxyXG4gICAgbG9jYXRlVXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9jYXRlVXNlckhhbmRsZXIpO1xyXG4gICAgYWRkcmVzc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5maW5kQWRkcmVzc0hhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgbG9jYXRlVXNlckhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICBhbGVydChcclxuICAgICAgICAnTG9jYXRpb24gZmVhdHVyZSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgY3VycmVudCBicm93c2VyIHZlcnNpb24gLSBwbGVhc2UgdXNlIGEgbW9yZSBtb2Rlcm4gYnJvd3NlciBvciBtYW51YWxseSBlbnRlciBhbiBhZGRyZXNzJ1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoXHJcbiAgICAgICdsb2FkaW5nLW1vZGFsLWNvbnRlbnQnLFxyXG4gICAgICAnTG9hZGluZyBsb2NhdGlvbiAtIHBsZWFzZSB3YWl0J1xyXG4gICAgKTtcclxuICAgIG1vZGFsLnNob3coKTtcclxuXHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAoc3VjY2Vzc1Jlc3VsdCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLmhpZGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzUmVzdWx0KTtcclxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHtcclxuICAgICAgICAgIGxhdDogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsbmc6IHN1Y2Nlc3NSZXN1bHQuY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgbW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgJ0NvdWxkIG5vdCBsb2NhdGUgeW91IHVuZm9ydHVuYXRlbHkuIFBsZWFzZSBlbnRlciBhbiBhZGRyZXNzIG1hbnVhbGx5J1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmaW5kQWRkcmVzc0hhbmRsZXIoKSB7fVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUZpbmRlciA9IG5ldyBQbGFjZUZpbmRlcigpO1xyXG4iXSwibmFtZXMiOlsiTW9kYWwiLCJQbGFjZUZpbmRlciIsImNvbnN0cnVjdG9yIiwiYWRkcmVzc0Zvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2NhdGVVc2VyQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRlVXNlckhhbmRsZXIiLCJmaW5kQWRkcmVzc0hhbmRsZXIiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImFsZXJ0IiwibW9kYWwiLCJzaG93IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2Vzc1Jlc3VsdCIsImhpZGUiLCJjb25zb2xlIiwibG9nIiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsImVycm9yIiwicGxhY2VGaW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(contentId, fallbackText) {\n    this.fallbackText = fallbackText;\n    this.contentTemplateEl = document.getElementById(contentId);\n    this.modalTemplateEl = document.getElementById('modal-template');\n  }\n  show() {\n    if ('content' in document.createElement('template')) {\n      const modalElements = document.importNode(this.modalTemplateEl.content, true);\n      this.modalElement = modalElements.querySelector('.modal');\n      this.backdropElement = modalElements.querySelector('.backdrop');\n      const contentElement = document.importNode(this.contentTemplateEl.content, true);\n      this.modalElement.appendChild(contentElement);\n      document.body.insertAdjacentElement('afterbegin', this.modalElement);\n      document.body.insertAdjacentElement('afterbegin', this.backdropElement);\n    } else {\n      // fallback code - if template tag not supported\n      alert(this.fallbackText);\n    }\n  }\n  hide() {\n    if (this.modalElement) {\n      document.body.removeChild(this.modalElement); // this.modalElement.remove()\n      document.body.removeChild(this.backdropElement);\n      this.modalElement = null;\n      this.backdropElement = null;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTW9kYWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLEtBQUssQ0FBQztFQUNqQkMsV0FBV0EsQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLEVBQUU7SUFDbkMsSUFBSSxDQUFDQSxZQUFZLEdBQUdBLFlBQVk7SUFDaEMsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUNKLFNBQVMsQ0FBQztJQUMzRCxJQUFJLENBQUNLLGVBQWUsR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFDbEU7RUFFQUUsSUFBSUEsQ0FBQSxFQUFHO0lBQ0wsSUFBSSxTQUFTLElBQUlILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ25ELE1BQU1DLGFBQWEsR0FBR0wsUUFBUSxDQUFDTSxVQUFVLENBQ3ZDLElBQUksQ0FBQ0osZUFBZSxDQUFDSyxPQUFPLEVBQzVCLElBQ0YsQ0FBQztNQUNELElBQUksQ0FBQ0MsWUFBWSxHQUFHSCxhQUFhLENBQUNJLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDekQsSUFBSSxDQUFDQyxlQUFlLEdBQUdMLGFBQWEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztNQUMvRCxNQUFNRSxjQUFjLEdBQUdYLFFBQVEsQ0FBQ00sVUFBVSxDQUN4QyxJQUFJLENBQUNQLGlCQUFpQixDQUFDUSxPQUFPLEVBQzlCLElBQ0YsQ0FBQztNQUVELElBQUksQ0FBQ0MsWUFBWSxDQUFDSSxXQUFXLENBQUNELGNBQWMsQ0FBQztNQUU3Q1gsUUFBUSxDQUFDYSxJQUFJLENBQUNDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNOLFlBQVksQ0FBQztNQUNwRVIsUUFBUSxDQUFDYSxJQUFJLENBQUNDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNKLGVBQWUsQ0FBQztJQUN6RSxDQUFDLE1BQU07TUFDTDtNQUNBSyxLQUFLLENBQUMsSUFBSSxDQUFDakIsWUFBWSxDQUFDO0lBQzFCO0VBQ0Y7RUFFQWtCLElBQUlBLENBQUEsRUFBRztJQUNMLElBQUksSUFBSSxDQUFDUixZQUFZLEVBQUU7TUFDckJSLFFBQVEsQ0FBQ2EsSUFBSSxDQUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDVCxZQUFZLENBQUMsQ0FBQyxDQUFDO01BQzlDUixRQUFRLENBQUNhLElBQUksQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQ1AsZUFBZSxDQUFDO01BQy9DLElBQUksQ0FBQ0YsWUFBWSxHQUFHLElBQUk7TUFDeEIsSUFBSSxDQUFDRSxlQUFlLEdBQUcsSUFBSTtJQUM3QjtFQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZXMwMS8uL3NyYy9VSS9Nb2RhbC5qcz8yNzAyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcbiAgY29uc3RydWN0b3IoY29udGVudElkLCBmYWxsYmFja1RleHQpIHtcclxuICAgIHRoaXMuZmFsbGJhY2tUZXh0ID0gZmFsbGJhY2tUZXh0O1xyXG4gICAgdGhpcy5jb250ZW50VGVtcGxhdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRJZCk7XHJcbiAgICB0aGlzLm1vZGFsVGVtcGxhdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC10ZW1wbGF0ZScpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIGlmICgnY29udGVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSkge1xyXG4gICAgICBjb25zdCBtb2RhbEVsZW1lbnRzID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcclxuICAgICAgICB0aGlzLm1vZGFsVGVtcGxhdGVFbC5jb250ZW50LFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5tb2RhbEVsZW1lbnQgPSBtb2RhbEVsZW1lbnRzLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IG1vZGFsRWxlbWVudHMucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcclxuICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsLmNvbnRlbnQsXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5tb2RhbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCB0aGlzLm1vZGFsRWxlbWVudCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgdGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZmFsbGJhY2sgY29kZSAtIGlmIHRlbXBsYXRlIHRhZyBub3Qgc3VwcG9ydGVkXHJcbiAgICAgIGFsZXJ0KHRoaXMuZmFsbGJhY2tUZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbEVsZW1lbnQpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsRWxlbWVudCk7IC8vIHRoaXMubW9kYWxFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xyXG4gICAgICB0aGlzLm1vZGFsRWxlbWVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiY29uc3RydWN0b3IiLCJjb250ZW50SWQiLCJmYWxsYmFja1RleHQiLCJjb250ZW50VGVtcGxhdGVFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2RhbFRlbXBsYXRlRWwiLCJzaG93IiwiY3JlYXRlRWxlbWVudCIsIm1vZGFsRWxlbWVudHMiLCJpbXBvcnROb2RlIiwiY29udGVudCIsIm1vZGFsRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrZHJvcEVsZW1lbnQiLCJjb250ZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiYm9keSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImFsZXJ0IiwiaGlkZSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UI/Modal.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/SharePlace.js");
/******/ 	
/******/ })()
;