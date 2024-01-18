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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n/* harmony import */ var _Utility_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utility/Location */ \"./src/Utility/Location.js\");\n\n\n\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));\n    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));\n  }\n  selectPlace(coordinates) {\n    if (this.map) {\n      this.map.render(coordinates);\n    } else {\n      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__.Map(coordinates);\n    }\n  }\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature is not available in your current browser version - please use a more modern browser or manually enter an address');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait');\n    modal.show();\n    navigator.geolocation.getCurrentPosition(successResult => {\n      modal.hide();\n      console.log(successResult);\n      const coordinates = {\n        lat: successResult.coords.latitude,\n        lng: successResult.coords.longitude\n      };\n      // console.log(coordinates);\n      this.selectPlace(coordinates);\n    }, error => {\n      modal.hide();\n      alert('Could not locate you unfortunately. Please enter an address manually');\n    });\n  }\n  async findAddressHandler(event) {\n    event.preventDefault();\n    const address = event.target.querySelector('input').value;\n    if (!address || address.trim().length === 0) {\n      alert('Invalid address entered - please try again');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait!');\n    modal.show();\n    try {\n      const coordinates = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_2__.getCoordsFromAddress)(address);\n      this.selectPlace(coordinates);\n    } catch (error) {\n      alert(error.message);\n    }\n    modal.hide();\n  }\n}\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFXLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWNlczAxLy4vc3JjL1NoYXJlUGxhY2UuanM/ZDVhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vVUkvTW9kYWwnO1xyXG5pbXBvcnQgeyBNYXAgfSBmcm9tICcuL1VJL01hcCc7XHJcbmltcG9ydCB7IGdldENvb3Jkc0Zyb21BZGRyZXNzIH0gZnJvbSAnLi9VdGlsaXR5L0xvY2F0aW9uJztcclxuXHJcbmNsYXNzIFBsYWNlRmluZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IGFkZHJlc3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgY29uc3QgbG9jYXRlVXNlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGUtYnRuJyk7XHJcblxyXG4gICAgbG9jYXRlVXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9jYXRlVXNlckhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRyZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmZpbmRBZGRyZXNzSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzKSB7XHJcbiAgICBpZiAodGhpcy5tYXApIHtcclxuICAgICAgdGhpcy5tYXAucmVuZGVyKGNvb3JkaW5hdGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWFwID0gbmV3IE1hcChjb29yZGluYXRlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2NhdGVVc2VySGFuZGxlcigpIHtcclxuICAgIGlmICghbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgIGFsZXJ0KFxyXG4gICAgICAgICdMb2NhdGlvbiBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBjdXJyZW50IGJyb3dzZXIgdmVyc2lvbiAtIHBsZWFzZSB1c2UgYSBtb3JlIG1vZGVybiBicm93c2VyIG9yIG1hbnVhbGx5IGVudGVyIGFuIGFkZHJlc3MnXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbChcclxuICAgICAgJ2xvYWRpbmctbW9kYWwtY29udGVudCcsXHJcbiAgICAgICdMb2FkaW5nIGxvY2F0aW9uIC0gcGxlYXNlIHdhaXQnXHJcbiAgICApO1xyXG4gICAgbW9kYWwuc2hvdygpO1xyXG5cclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXHJcbiAgICAgIChzdWNjZXNzUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgbW9kYWwuaGlkZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3NSZXN1bHQpO1xyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG4gICAgICAgICAgbGF0OiBzdWNjZXNzUmVzdWx0LmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxuZzogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGxhY2UoY29vcmRpbmF0ZXMpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICBtb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAnQ291bGQgbm90IGxvY2F0ZSB5b3UgdW5mb3J0dW5hdGVseS4gUGxlYXNlIGVudGVyIGFuIGFkZHJlc3MgbWFudWFsbHknXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZpbmRBZGRyZXNzSGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcclxuXHJcbiAgICBpZiAoIWFkZHJlc3MgfHwgYWRkcmVzcy50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIGFkZHJlc3MgZW50ZXJlZCAtIHBsZWFzZSB0cnkgYWdhaW4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKFxyXG4gICAgICAnbG9hZGluZy1tb2RhbC1jb250ZW50JyxcclxuICAgICAgJ0xvYWRpbmcgbG9jYXRpb24gLSBwbGVhc2Ugd2FpdCEnXHJcbiAgICApO1xyXG4gICAgbW9kYWwuc2hvdygpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZXRDb29yZHNGcm9tQWRkcmVzcyhhZGRyZXNzKTtcclxuICAgICAgdGhpcy5zZWxlY3RQbGFjZShjb29yZGluYXRlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIG1vZGFsLmhpZGUoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlRmluZGVyID0gbmV3IFBsYWNlRmluZGVyKCk7XHJcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIk1hcCIsImdldENvb3Jkc0Zyb21BZGRyZXNzIiwiUGxhY2VGaW5kZXIiLCJjb25zdHJ1Y3RvciIsImFkZHJlc3NGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jYXRlVXNlckJ0biIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2F0ZVVzZXJIYW5kbGVyIiwiYmluZCIsImZpbmRBZGRyZXNzSGFuZGxlciIsInNlbGVjdFBsYWNlIiwiY29vcmRpbmF0ZXMiLCJtYXAiLCJyZW5kZXIiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImFsZXJ0IiwibW9kYWwiLCJzaG93IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic3VjY2Vzc1Jlc3VsdCIsImhpZGUiLCJjb25zb2xlIiwibG9nIiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJlcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGRyZXNzIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwibGVuZ3RoIiwibWVzc2FnZSIsInBsYWNlRmluZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

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

/***/ }),

/***/ "./src/Utility/Location.js":
/*!*********************************!*\
  !*** ./src/Utility/Location.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCoordsFromAddress: () => (/* binding */ getCoordsFromAddress)\n/* harmony export */ });\nconst GOOGLE_API_KEY = 'K6XUdfpfsLAIzaSyCueuEMBmaA0kwpTF6HwpjtY';\nasync function getCoordsFromAddress(address) {\n  const urlAddress = encodeURI(address);\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch cordinates. Please try again');\n  }\n  const data = await response.json();\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n  const coordinates = data.results[0].geometry.location;\n  return coordinates;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9Mb2NhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsY0FBYyxHQUFHLHlDQUF5QztBQUV6RCxlQUFlQyxvQkFBb0JBLENBQUNDLE9BQU8sRUFBRTtFQUNsRCxNQUFNQyxVQUFVLEdBQUdDLFNBQVMsQ0FBQ0YsT0FBTyxDQUFDO0VBRXJDLE1BQU1HLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLDZEQUE0REgsVUFBVyxRQUFPSCxjQUFlLEVBQ2hHLENBQUM7RUFFRCxJQUFJLENBQUNLLFFBQVEsQ0FBQ0UsRUFBRSxFQUFFO0lBQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO0VBQ2pFO0VBRUEsTUFBTUMsSUFBSSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7RUFDbEMsSUFBSUQsSUFBSSxDQUFDRSxhQUFhLEVBQUU7SUFDdEIsTUFBTSxJQUFJSCxLQUFLLENBQUNDLElBQUksQ0FBQ0UsYUFBYSxDQUFDO0VBQ3JDO0VBRUEsTUFBTUMsV0FBVyxHQUFHSCxJQUFJLENBQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRO0VBQ3JELE9BQU9ILFdBQVc7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZXMwMS8uL3NyYy9VdGlsaXR5L0xvY2F0aW9uLmpzPzQyZGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR09PR0xFX0FQSV9LRVkgPSAnSzZYVWRmcGZzTEFJemFTeUN1ZXVFTUJtYUEwa3dwVEY2SHdwanRZJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZHNGcm9tQWRkcmVzcyhhZGRyZXNzKSB7XHJcbiAgY29uc3QgdXJsQWRkcmVzcyA9IGVuY29kZVVSSShhZGRyZXNzKTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JHt1cmxBZGRyZXNzfSZrZXk9JHtHT09HTEVfQVBJX0tFWX1gXHJcbiAgKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY29yZGluYXRlcy4gUGxlYXNlIHRyeSBhZ2FpbicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAoZGF0YS5lcnJvcl9tZXNzYWdlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvcl9tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uO1xyXG4gIHJldHVybiBjb29yZGluYXRlcztcclxufVxyXG4iXSwibmFtZXMiOlsiR09PR0xFX0FQSV9LRVkiLCJnZXRDb29yZHNGcm9tQWRkcmVzcyIsImFkZHJlc3MiLCJ1cmxBZGRyZXNzIiwiZW5jb2RlVVJJIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVycm9yX21lc3NhZ2UiLCJjb29yZGluYXRlcyIsInJlc3VsdHMiLCJnZW9tZXRyeSIsImxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Utility/Location.js\n");

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