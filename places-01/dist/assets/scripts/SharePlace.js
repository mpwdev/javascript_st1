/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/***/ (() => {

eval("class PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler);\n    addressForm.addEventListener('submit', this.findAddressHandler);\n  }\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature is not available in your current browser version - please use a more modern browser or manually enter an address');\n      return;\n    }\n    navigator.geolocation.getCurrentPosition(successResult => {\n      console.log(successResult);\n      const coordinates = {\n        lat: successResult.coords.latitude,\n        lng: successResult.coords.longitude\n      };\n      console.log(coordinates);\n    }, error => {\n      alert('Could not locate you unfortunately. Please enter an address manually');\n    });\n  }\n  findAddressHandler() {}\n}\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcyIsIm5hbWVzIjpbIlBsYWNlRmluZGVyIiwiY29uc3RydWN0b3IiLCJhZGRyZXNzRm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvY2F0ZVVzZXJCdG4iLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGVVc2VySGFuZGxlciIsImZpbmRBZGRyZXNzSGFuZGxlciIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiYWxlcnQiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzdWNjZXNzUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNvb3JkaW5hdGVzIiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJlcnJvciIsInBsYWNlRmluZGVyIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZXMwMS8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxhY2VGaW5kZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBsb2NhdGVVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0ZS1idG4nKTtcclxuXHJcbiAgICBsb2NhdGVVc2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5sb2NhdGVVc2VySGFuZGxlcik7XHJcbiAgICBhZGRyZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmZpbmRBZGRyZXNzSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBsb2NhdGVVc2VySGFuZGxlcigpIHtcclxuICAgIGlmICghbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgIGFsZXJ0KFxyXG4gICAgICAgICdMb2NhdGlvbiBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBjdXJyZW50IGJyb3dzZXIgdmVyc2lvbiAtIHBsZWFzZSB1c2UgYSBtb3JlIG1vZGVybiBicm93c2VyIG9yIG1hbnVhbGx5IGVudGVyIGFuIGFkZHJlc3MnXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAoc3VjY2Vzc1Jlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3NSZXN1bHQpO1xyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG4gICAgICAgICAgbGF0OiBzdWNjZXNzUmVzdWx0LmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxuZzogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgICdDb3VsZCBub3QgbG9jYXRlIHlvdSB1bmZvcnR1bmF0ZWx5LiBQbGVhc2UgZW50ZXIgYW4gYWRkcmVzcyBtYW51YWxseSdcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZmluZEFkZHJlc3NIYW5kbGVyKCkge31cclxufVxyXG5cclxuY29uc3QgcGxhY2VGaW5kZXIgPSBuZXcgUGxhY2VGaW5kZXIoKTsiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFdBQVcsQ0FBQztFQUNoQkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osTUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDbEQsTUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxZQUFZLENBQUM7SUFFM0RELGFBQWEsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsaUJBQWlCLENBQUM7SUFDL0ROLFdBQVcsQ0FBQ0ssZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0Usa0JBQWtCLENBQUM7RUFDakU7RUFFQUQsaUJBQWlCQSxDQUFBLEVBQUc7SUFDbEIsSUFBSSxDQUFDRSxTQUFTLENBQUNDLFdBQVcsRUFBRTtNQUMxQkMsS0FBSyxDQUNILG1JQUNGLENBQUM7TUFDRDtJQUNGO0lBRUFGLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDRSxrQkFBa0IsQ0FDckNDLGFBQWEsSUFBSztNQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGFBQWEsQ0FBQztNQUMxQixNQUFNRyxXQUFXLEdBQUc7UUFDbEJDLEdBQUcsRUFBRUosYUFBYSxDQUFDSyxNQUFNLENBQUNDLFFBQVE7UUFDbENDLEdBQUcsRUFBRVAsYUFBYSxDQUFDSyxNQUFNLENBQUNHO01BQzVCLENBQUM7TUFDRFAsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBQztJQUMxQixDQUFDLEVBQ0FNLEtBQUssSUFBSztNQUNUWCxLQUFLLENBQ0gsc0VBQ0YsQ0FBQztJQUNILENBQ0YsQ0FBQztFQUNIO0VBRUFILGtCQUFrQkEsQ0FBQSxFQUFHLENBQUM7QUFDeEI7QUFFQSxNQUFNZSxXQUFXLEdBQUcsSUFBSXhCLFdBQVcsQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/SharePlace.js"]();
/******/ 	
/******/ })()
;