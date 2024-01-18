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

/***/ "./src/MyPlace.js":
/*!************************!*\
  !*** ./src/MyPlace.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n\nclass LoadedPlace {\n  constructor(coordinates, address) {\n    new _UI_Map__WEBPACK_IMPORTED_MODULE_0__.Map(coordinates);\n    const headerTitleEl = document.querySelector('header h1');\n    headerTitleEl.textContent = address;\n  }\n}\nconst url = new URL(location.href);\nconst queryParams = url.searchParams;\nconst coords = {\n  lat: parseFloat(queryParams.get('lat')),\n  lng: +queryParams.get('lng')\n};\nconst address = queryParams.get('address');\nnew LoadedPlace(coords, address);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTXlQbGFjZS5qcyIsIm1hcHBpbmdzIjoiOztBQUErQjtBQUUvQixNQUFNQyxXQUFXLENBQUM7RUFDaEJDLFdBQVdBLENBQUNDLFdBQVcsRUFBRUMsT0FBTyxFQUFFO0lBQ2hDLElBQUlKLHdDQUFHLENBQUNHLFdBQVcsQ0FBQztJQUNwQixNQUFNRSxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUN6REYsYUFBYSxDQUFDRyxXQUFXLEdBQUdKLE9BQU87RUFDckM7QUFDRjtBQUVBLE1BQU1LLEdBQUcsR0FBRyxJQUFJQyxHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO0FBQ2xDLE1BQU1DLFdBQVcsR0FBR0osR0FBRyxDQUFDSyxZQUFZO0FBQ3BDLE1BQU1DLE1BQU0sR0FBRztFQUNiQyxHQUFHLEVBQUVDLFVBQVUsQ0FBQ0osV0FBVyxDQUFDSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDdkNDLEdBQUcsRUFBRSxDQUFDTixXQUFXLENBQUNLLEdBQUcsQ0FBQyxLQUFLO0FBQzdCLENBQUM7QUFDRCxNQUFNZCxPQUFPLEdBQUdTLFdBQVcsQ0FBQ0ssR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUMxQyxJQUFJakIsV0FBVyxDQUFDYyxNQUFNLEVBQUVYLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWNlczAxLy4vc3JjL015UGxhY2UuanM/NWYzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXAgfSBmcm9tICcuL1VJL01hcCc7XHJcblxyXG5jbGFzcyBMb2FkZWRQbGFjZSB7XHJcbiAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMsIGFkZHJlc3MpIHtcclxuICAgIG5ldyBNYXAoY29vcmRpbmF0ZXMpO1xyXG4gICAgY29uc3QgaGVhZGVyVGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpO1xyXG4gICAgaGVhZGVyVGl0bGVFbC50ZXh0Q29udGVudCA9IGFkZHJlc3M7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xyXG5jb25zdCBxdWVyeVBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XHJcbmNvbnN0IGNvb3JkcyA9IHtcclxuICBsYXQ6IHBhcnNlRmxvYXQocXVlcnlQYXJhbXMuZ2V0KCdsYXQnKSksXHJcbiAgbG5nOiArcXVlcnlQYXJhbXMuZ2V0KCdsbmcnKSxcclxufTtcclxuY29uc3QgYWRkcmVzcyA9IHF1ZXJ5UGFyYW1zLmdldCgnYWRkcmVzcycpO1xyXG5uZXcgTG9hZGVkUGxhY2UoY29vcmRzLCBhZGRyZXNzKTtcclxuIl0sIm5hbWVzIjpbIk1hcCIsIkxvYWRlZFBsYWNlIiwiY29uc3RydWN0b3IiLCJjb29yZGluYXRlcyIsImFkZHJlc3MiLCJoZWFkZXJUaXRsZUVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlYXJjaFBhcmFtcyIsImNvb3JkcyIsImxhdCIsInBhcnNlRmxvYXQiLCJnZXQiLCJsbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/MyPlace.js\n");

/***/ }),

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Map: () => (/* binding */ Map)\n/* harmony export */ });\nclass Map {\n  constructor(coords) {\n    // this.coordinates = coords;\n    this.render(coords);\n  }\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later');\n      return;\n    }\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxHQUFHLENBQUM7RUFDZkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2xCO0lBQ0EsSUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQU0sQ0FBQztFQUNyQjtFQUVBQyxNQUFNQSxDQUFDQyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDWEMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDO01BQzdEO0lBQ0Y7SUFFQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUYsTUFBTSxDQUFDRyxJQUFJLENBQUNSLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDOURDLE1BQU0sRUFBRVAsV0FBVztNQUNuQlEsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBRUYsSUFBSVAsTUFBTSxDQUFDRyxJQUFJLENBQUNLLE1BQU0sQ0FBQztNQUNyQkMsUUFBUSxFQUFFVixXQUFXO01BQ3JCRyxHQUFHLEVBQUVBO0lBQ1AsQ0FBQyxDQUFDO0VBQ0o7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWNlczAxLy4vc3JjL1VJL01hcC5qcz9iNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xyXG4gIGNvbnN0cnVjdG9yKGNvb3Jkcykge1xyXG4gICAgLy8gdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkcztcclxuICAgIHRoaXMucmVuZGVyKGNvb3Jkcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmICghZ29vZ2xlKSB7XHJcbiAgICAgIGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBtYXBzIGxpYnJhcnkgLSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICBjZW50ZXI6IGNvb3JkaW5hdGVzLFxyXG4gICAgICB6b29tOiAxNixcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXMsXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNYXAiLCJjb25zdHJ1Y3RvciIsImNvb3JkcyIsInJlbmRlciIsImNvb3JkaW5hdGVzIiwiZ29vZ2xlIiwiYWxlcnQiLCJtYXAiLCJtYXBzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsInpvb20iLCJNYXJrZXIiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/MyPlace.js");
/******/ 	
/******/ })()
;