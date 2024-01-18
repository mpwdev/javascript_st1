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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n\n\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));\n    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));\n  }\n  selectPlace(coordinates) {\n    if (this.map) {\n      this.map.render(coordinates);\n    } else {\n      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__.Map(coordinates);\n    }\n  }\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature is not available in your current browser version - please use a more modern browser or manually enter an address');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait');\n    modal.show();\n    navigator.geolocation.getCurrentPosition(successResult => {\n      modal.hide();\n      console.log(successResult);\n      const coordinates = {\n        lat: successResult.coords.latitude,\n        lng: successResult.coords.longitude\n      };\n      // console.log(coordinates);\n      this.selectPlace(coordinates);\n    }, error => {\n      modal.hide();\n      alert('Could not locate you unfortunately. Please enter an address manually');\n    });\n  }\n  findAddressHandler() {}\n}\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBbUM7QUFDSjtBQUUvQixNQUFNRSxXQUFXLENBQUM7RUFDaEJDLFdBQVdBLENBQUEsRUFBRztJQUNaLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ2xELE1BQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBRTNERCxhQUFhLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLGlCQUFpQixDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUVQLFdBQVcsQ0FBQ0ssZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0csa0JBQWtCLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RTtFQUVBRSxXQUFXQSxDQUFDQyxXQUFXLEVBQUU7SUFDdkIsSUFBSSxJQUFJLENBQUNDLEdBQUcsRUFBRTtNQUNaLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxNQUFNLENBQUNGLFdBQVcsQ0FBQztJQUM5QixDQUFDLE1BQU07TUFDTCxJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJZCx3Q0FBRyxDQUFDYSxXQUFXLENBQUM7SUFDakM7RUFDRjtFQUVBSixpQkFBaUJBLENBQUEsRUFBRztJQUNsQixJQUFJLENBQUNPLFNBQVMsQ0FBQ0MsV0FBVyxFQUFFO01BQzFCQyxLQUFLLENBQ0gsbUlBQ0YsQ0FBQztNQUNEO0lBQ0Y7SUFFQSxNQUFNQyxLQUFLLEdBQUcsSUFBSXBCLDRDQUFLLENBQ3JCLHVCQUF1QixFQUN2QixnQ0FDRixDQUFDO0lBQ0RvQixLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBRVpKLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDSSxrQkFBa0IsQ0FDckNDLGFBQWEsSUFBSztNQUNqQkgsS0FBSyxDQUFDSSxJQUFJLENBQUMsQ0FBQztNQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsYUFBYSxDQUFDO01BQzFCLE1BQU1ULFdBQVcsR0FBRztRQUNsQmEsR0FBRyxFQUFFSixhQUFhLENBQUNLLE1BQU0sQ0FBQ0MsUUFBUTtRQUNsQ0MsR0FBRyxFQUFFUCxhQUFhLENBQUNLLE1BQU0sQ0FBQ0c7TUFDNUIsQ0FBQztNQUNEO01BQ0EsSUFBSSxDQUFDbEIsV0FBVyxDQUFDQyxXQUFXLENBQUM7SUFDL0IsQ0FBQyxFQUNBa0IsS0FBSyxJQUFLO01BQ1RaLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLENBQUM7TUFDWkwsS0FBSyxDQUNILHNFQUNGLENBQUM7SUFDSCxDQUNGLENBQUM7RUFDSDtFQUVBUCxrQkFBa0JBLENBQUEsRUFBRyxDQUFDO0FBQ3hCO0FBRUEsTUFBTXFCLFdBQVcsR0FBRyxJQUFJL0IsV0FBVyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZXMwMS8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL1VJL01vZGFsJztcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9VSS9NYXAnO1xyXG5cclxuY2xhc3MgUGxhY2VGaW5kZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBsb2NhdGVVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0ZS1idG4nKTtcclxuXHJcbiAgICBsb2NhdGVVc2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5sb2NhdGVVc2VySGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIGFkZHJlc3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuZmluZEFkZHJlc3NIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UGxhY2UoY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmICh0aGlzLm1hcCkge1xyXG4gICAgICB0aGlzLm1hcC5yZW5kZXIoY29vcmRpbmF0ZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKGNvb3JkaW5hdGVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvY2F0ZVVzZXJIYW5kbGVyKCkge1xyXG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgYWxlcnQoXHJcbiAgICAgICAgJ0xvY2F0aW9uIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGN1cnJlbnQgYnJvd3NlciB2ZXJzaW9uIC0gcGxlYXNlIHVzZSBhIG1vcmUgbW9kZXJuIGJyb3dzZXIgb3IgbWFudWFsbHkgZW50ZXIgYW4gYWRkcmVzcydcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKFxyXG4gICAgICAnbG9hZGluZy1tb2RhbC1jb250ZW50JyxcclxuICAgICAgJ0xvYWRpbmcgbG9jYXRpb24gLSBwbGVhc2Ugd2FpdCdcclxuICAgICk7XHJcbiAgICBtb2RhbC5zaG93KCk7XHJcblxyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcclxuICAgICAgKHN1Y2Nlc3NSZXN1bHQpID0+IHtcclxuICAgICAgICBtb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzc1Jlc3VsdCk7XHJcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7XHJcbiAgICAgICAgICBsYXQ6IHN1Y2Nlc3NSZXN1bHQuY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgbG5nOiBzdWNjZXNzUmVzdWx0LmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQbGFjZShjb29yZGluYXRlcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIG1vZGFsLmhpZGUoKTtcclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgICdDb3VsZCBub3QgbG9jYXRlIHlvdSB1bmZvcnR1bmF0ZWx5LiBQbGVhc2UgZW50ZXIgYW4gYWRkcmVzcyBtYW51YWxseSdcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZmluZEFkZHJlc3NIYW5kbGVyKCkge31cclxufVxyXG5cclxuY29uc3QgcGxhY2VGaW5kZXIgPSBuZXcgUGxhY2VGaW5kZXIoKTtcclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiTWFwIiwiUGxhY2VGaW5kZXIiLCJjb25zdHJ1Y3RvciIsImFkZHJlc3NGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jYXRlVXNlckJ0biIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2F0ZVVzZXJIYW5kbGVyIiwiYmluZCIsImZpbmRBZGRyZXNzSGFuZGxlciIsInNlbGVjdFBsYWNlIiwiY29vcmRpbmF0ZXMiLCJtYXAiLCJyZW5kZXIiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImFsZXJ0IiwibW9kYWwiLCJzaG93IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2Vzc1Jlc3VsdCIsImhpZGUiLCJjb25zb2xlIiwibG9nIiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJlcnJvciIsInBsYWNlRmluZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Map: () => (/* binding */ Map)\n/* harmony export */ });\nclass Map {\n  constructor(coords) {\n    // this.coordinates = coords;\n    this.render(coords);\n  }\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later');\n      return;\n    }\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxHQUFHLENBQUM7RUFDZkMsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFO0lBQ2xCO0lBQ0EsSUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQU0sQ0FBQztFQUNyQjtFQUVBQyxNQUFNQSxDQUFDQyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEVBQUU7TUFDWEMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDO01BQzdEO0lBQ0Y7SUFFQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUYsTUFBTSxDQUFDRyxJQUFJLENBQUNSLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDOURDLE1BQU0sRUFBRVAsV0FBVztNQUNuQlEsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBRUYsSUFBSVAsTUFBTSxDQUFDRyxJQUFJLENBQUNLLE1BQU0sQ0FBQztNQUNyQkMsUUFBUSxFQUFFVixXQUFXO01BQ3JCRyxHQUFHLEVBQUVBO0lBQ1AsQ0FBQyxDQUFDO0VBQ0o7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWNlczAxLy4vc3JjL1VJL01hcC5qcz9iNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xyXG4gIGNvbnN0cnVjdG9yKGNvb3Jkcykge1xyXG4gICAgLy8gdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkcztcclxuICAgIHRoaXMucmVuZGVyKGNvb3Jkcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmICghZ29vZ2xlKSB7XHJcbiAgICAgIGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBtYXBzIGxpYnJhcnkgLSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICBjZW50ZXI6IGNvb3JkaW5hdGVzLFxyXG4gICAgICB6b29tOiAxNixcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXMsXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNYXAiLCJjb25zdHJ1Y3RvciIsImNvb3JkcyIsInJlbmRlciIsImNvb3JkaW5hdGVzIiwiZ29vZ2xlIiwiYWxlcnQiLCJtYXAiLCJtYXBzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsInpvb20iLCJNYXJrZXIiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

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