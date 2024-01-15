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

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\n// import { Tooltip } from './Tooltip.js';\n\nconsole.log('Project Item created!');\n\nclass ProjectItem {\n  hasActiveTooltip = false;\n\n  constructor(id, updateProjectListsFunction, type) {\n    this.id = id;\n    this.updateProjectListsHandler = updateProjectListsFunction;\n    this.connectMoreInfoButton();\n    this.connectSwitchButton(type);\n    this.connectDrag();\n  }\n\n  showMoreInfoHandler() {\n    if (this.hasActiveTooltip) {\n      return;\n    }\n    const projectElement = document.getElementById(this.id);\n    const tooltipText = projectElement.dataset.extraInfo;\n    __webpack_require__.e(/*! import() */ \"src_App_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then(module => {\n      const tooltip = new module.Tooltip(\n        () => {\n          this.hasActiveTooltip = false;\n        },\n        tooltipText,\n        this.id\n      );\n      tooltip.attach();\n      this.hasActiveTooltip = true;\n    });\n   \n  }\n\n  connectDrag() {\n    const item = document.getElementById(this.id);\n    item.addEventListener('dragstart', event => {\n      event.dataTransfer.setData('text/plain', this.id);\n      event.dataTransfer.effectAllowed = 'move';\n    });\n\n    item.addEventListener('dragend', event => {\n      console.log(event);\n    });\n  }\n\n  connectMoreInfoButton() {\n    const projectItemElement = document.getElementById(this.id);\n    const moreInfoBtn = projectItemElement.querySelector(\n      'button:first-of-type'\n    );\n    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\n  }\n\n  connectSwitchButton(type) {\n    const projectItemElement = document.getElementById(this.id);\n    let switchBtn = projectItemElement.querySelector('button:last-of-type');\n    switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListeners(switchBtn);\n    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\n    switchBtn.addEventListener(\n      'click',\n      this.updateProjectListsHandler.bind(null, this.id)\n    );\n  }\n\n  update(updateProjectListsFn, type) {\n    this.updateProjectListsHandler = updateProjectListsFn;\n    this.connectSwitchButton(type);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBQ3BELFlBQVksVUFBVTs7QUFFdEI7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJKQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9vbGluZy0wMS8uL3NyYy9BcHAvUHJvamVjdEl0ZW0uanM/MmU2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET01IZWxwZXIgfSBmcm9tICcuLi9VdGlsaXR5L0RPTUhlbHBlci5qcyc7XG4vLyBpbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi9Ub29sdGlwLmpzJztcblxuY29uc29sZS5sb2coJ1Byb2plY3QgSXRlbSBjcmVhdGVkIScpO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW0ge1xuICBoYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoaWQsIHVwZGF0ZVByb2plY3RMaXN0c0Z1bmN0aW9uLCB0eXBlKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdExpc3RzSGFuZGxlciA9IHVwZGF0ZVByb2plY3RMaXN0c0Z1bmN0aW9uO1xuICAgIHRoaXMuY29ubmVjdE1vcmVJbmZvQnV0dG9uKCk7XG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xuICAgIHRoaXMuY29ubmVjdERyYWcoKTtcbiAgfVxuXG4gIHNob3dNb3JlSW5mb0hhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuaGFzQWN0aXZlVG9vbHRpcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGNvbnN0IHRvb2x0aXBUZXh0ID0gcHJvamVjdEVsZW1lbnQuZGF0YXNldC5leHRyYUluZm87XG4gICAgaW1wb3J0KCcuL1Rvb2x0aXAuanMnKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICBjb25zdCB0b29sdGlwID0gbmV3IG1vZHVsZS5Ub29sdGlwKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXBUZXh0LFxuICAgICAgICB0aGlzLmlkXG4gICAgICApO1xuICAgICAgdG9vbHRpcC5hdHRhY2goKTtcbiAgICAgIHRoaXMuaGFzQWN0aXZlVG9vbHRpcCA9IHRydWU7XG4gICAgfSk7XG4gICBcbiAgfVxuXG4gIGNvbm5lY3REcmFnKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5pZCk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICB9KTtcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbm5lY3RNb3JlSW5mb0J1dHRvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICBjb25zdCBtb3JlSW5mb0J0biA9IHByb2plY3RJdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2J1dHRvbjpmaXJzdC1vZi10eXBlJ1xuICAgICk7XG4gICAgbW9yZUluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dNb3JlSW5mb0hhbmRsZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICBsZXQgc3dpdGNoQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKTtcbiAgICBzd2l0Y2hCdG4gPSBET01IZWxwZXIuY2xlYXJFdmVudExpc3RlbmVycyhzd2l0Y2hCdG4pO1xuICAgIHN3aXRjaEJ0bi50ZXh0Q29udGVudCA9IHR5cGUgPT09ICdhY3RpdmUnID8gJ0ZpbmlzaCcgOiAnQWN0aXZhdGUnO1xuICAgIHN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMudXBkYXRlUHJvamVjdExpc3RzSGFuZGxlci5iaW5kKG51bGwsIHRoaXMuaWQpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZSh1cGRhdGVQcm9qZWN0TGlzdHNGbiwgdHlwZSkge1xuICAgIHRoaXMudXBkYXRlUHJvamVjdExpc3RzSGFuZGxlciA9IHVwZGF0ZVByb2plY3RMaXN0c0ZuO1xuICAgIHRoaXMuY29ubmVjdFN3aXRjaEJ1dHRvbih0eXBlKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\n\n\nconst ProjectItem = 'abc';\n\n// console.log(DEFAULT_VALUE);\n\nclass ProjectList {\n  projects = [];\n\n  constructor(type) {\n    this.type = type;\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\n    for (const prjItem of prjItems) {\n      this.projects.push(\n        new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)\n      );\n    }\n    console.log(this.projects);\n    this.connectDroppable();\n  }\n\n  connectDroppable() {\n    console.log(globalThis);\n    const list = document.querySelector(`#${this.type}-projects ul`);\n\n    list.addEventListener('dragenter', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        list.parentElement.classList.add('droppable');\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragover', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragleave', event => {\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\n        list.parentElement.classList.remove('droppable');\n      }\n    });\n\n    list.addEventListener('drop', event => {\n      const prjId = event.dataTransfer.getData('text/plain');\n      if (this.projects.find(p => p.id === prjId)) {\n        return;\n      }\n      document\n        .getElementById(prjId)\n        .querySelector('button:last-of-type')\n        .click();\n      list.parentElement.classList.remove('droppable');\n      // event.preventDefault(); // not required\n    });\n  }\n\n  setSwitchHandlerFunction(switchHandlerFunction) {\n    this.switchHandler = switchHandlerFunction;\n  }\n\n  addProject(project) {\n    this.projects.push(project);\n    _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.moveElement(project.id, `#${this.type}-projects ul`);\n    project.update(this.switchProject.bind(this), this.type);\n  }\n\n  switchProject(projectId) {\n    // const projectIndex = this.projects.findIndex(p => p.id === projectId);\n    // this.projects.splice(projectIndex, 1);\n    this.switchHandler(this.projects.find(p => p.id === projectId));\n    this.projects = this.projects.filter(p => p.id !== projectId);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwRDtBQUNWOztBQUVoRDs7QUFFQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsS0FBSztBQUN4RDtBQUNBO0FBQ0EsWUFBWSx3REFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw4REFBZ0IsaUJBQWlCLFVBQVU7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rvb2xpbmctMDEvLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzPzBkY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdEl0ZW0gYXMgUHJqSXRlbSB9IGZyb20gJy4vUHJvamVjdEl0ZW0uanMnO1xuaW1wb3J0ICogYXMgRE9NSCBmcm9tICcuLi9VdGlsaXR5L0RPTUhlbHBlci5qcyc7XG5cbmNvbnN0IFByb2plY3RJdGVtID0gJ2FiYyc7XG5cbi8vIGNvbnNvbGUubG9nKERFRkFVTFRfVkFMVUUpO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdExpc3Qge1xuICBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIGNvbnN0IHByakl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7dHlwZX0tcHJvamVjdHMgbGlgKTtcbiAgICBmb3IgKGNvbnN0IHByakl0ZW0gb2YgcHJqSXRlbXMpIHtcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChcbiAgICAgICAgbmV3IFByakl0ZW0ocHJqSXRlbS5pZCwgdGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSlcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpO1xuICAgIHRoaXMuY29ubmVjdERyb3BwYWJsZSgpO1xuICB9XG5cbiAgY29ubmVjdERyb3BwYWJsZSgpIHtcbiAgICBjb25zb2xlLmxvZyhnbG9iYWxUaGlzKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSAndGV4dC9wbGFpbicpIHtcbiAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3BwYWJsZScpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldC5jbG9zZXN0KGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCkgIT09IGxpc3QpIHtcbiAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3BwYWJsZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZXZlbnQgPT4ge1xuICAgICAgY29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgaWYgKHRoaXMucHJvamVjdHMuZmluZChwID0+IHAuaWQgPT09IHByaklkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQocHJqSWQpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdidXR0b246bGFzdC1vZi10eXBlJylcbiAgICAgICAgLmNsaWNrKCk7XG4gICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcHBhYmxlJyk7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBub3QgcmVxdWlyZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihzd2l0Y2hIYW5kbGVyRnVuY3Rpb24pIHtcbiAgICB0aGlzLnN3aXRjaEhhbmRsZXIgPSBzd2l0Y2hIYW5kbGVyRnVuY3Rpb247XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgRE9NSC5tb3ZlRWxlbWVudChwcm9qZWN0LmlkLCBgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xuICAgIHByb2plY3QudXBkYXRlKHRoaXMuc3dpdGNoUHJvamVjdC5iaW5kKHRoaXMpLCB0aGlzLnR5cGUpO1xuICB9XG5cbiAgc3dpdGNoUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAvLyBjb25zdCBwcm9qZWN0SW5kZXggPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IHByb2plY3RJZCk7XG4gICAgLy8gdGhpcy5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICB0aGlzLnN3aXRjaEhhbmRsZXIodGhpcy5wcm9qZWN0cy5maW5kKHAgPT4gcC5pZCA9PT0gcHJvamVjdElkKSk7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHAgPT4gcC5pZCAhPT0gcHJvamVjdElkKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMHelper: () => (/* binding */ DOMHelper),\n/* harmony export */   clearEventListeners: () => (/* binding */ clearEventListeners),\n/* harmony export */   moveElement: () => (/* binding */ moveElement)\n/* harmony export */ });\nconsole.log('DOM Helper executing!');\n\nclass DOMHelper {\n  static clearEventListeners(element) {\n    const clonedElement = element.cloneNode(true);\n    element.replaceWith(clonedElement);\n    return clonedElement;\n  }\n\n  static moveElement(elementId, newDestinationSelector) {\n    const element = document.getElementById(elementId);\n    const destinationElement = document.querySelector(newDestinationSelector);\n    destinationElement.append(element);\n    element.scrollIntoView({ behavior: 'smooth' });\n  }\n}\n\nfunction clearEventListeners(element) {\n  const clonedElement = element.cloneNode(true);\n  element.replaceWith(clonedElement);\n  return clonedElement;\n}\n\nfunction moveElement(elementId, newDestinationSelector) {\n  const element = document.getElementById(elementId);\n  const destinationElement = document.querySelector(newDestinationSelector);\n  destinationElement.append(element);\n  element.scrollIntoView({ behavior: 'smooth' });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9CQUFvQjtBQUNqRDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9vbGluZy0wMS8uL3NyYy9VdGlsaXR5L0RPTUhlbHBlci5qcz81OTI2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdET00gSGVscGVyIGV4ZWN1dGluZyEnKTtcblxuZXhwb3J0IGNsYXNzIERPTUhlbHBlciB7XG4gIHN0YXRpYyBjbGVhckV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcbiAgICByZXR1cm4gY2xvbmVkRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBtb3ZlRWxlbWVudChlbGVtZW50SWQsIG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpO1xuICAgIGRlc3RpbmF0aW9uRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJFdmVudExpc3RlbmVycyhlbGVtZW50KSB7XG4gIGNvbnN0IGNsb25lZEVsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcbiAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlRWxlbWVudChlbGVtZW50SWQsIG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gIGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV3RGVzdGluYXRpb25TZWxlY3Rvcik7XG4gIGRlc3RpbmF0aW9uRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG4gIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelper.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n\n\n// eslint-disable-next-line no-undef\nglobalThis.DEFAULT_VALUE = 'MAX';\n\nclass App {\n  static init() {\n    const activeProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList('active');\n    const finishedProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList('finished');\n    activeProjectsList.setSwitchHandlerFunction(\n      finishedProjectsList.addProject.bind(finishedProjectsList)\n    );\n    finishedProjectsList.setSwitchHandlerFunction(\n      activeProjectsList.addProject.bind(activeProjectsList)\n    );\n\n    // const timerId = setTimeout(this.startAnalytics, 3000);\n\n    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\n    //   clearTimeout(timerId);\n    // });\n  }\n\n  static startAnalytics() {\n    const analyticsScript = document.createElement('script');\n    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';\n    analyticsScript.defer = true;\n    document.head.append(analyticsScript);\n  }\n}\n\nApp.init();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7O0FBQW1EOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsNERBQVc7QUFDOUMscUNBQXFDLDREQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9vbGluZy0wMS8uL3NyYy9hcHAuanM/MTExMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vQXBwL1Byb2plY3RMaXN0LmpzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5nbG9iYWxUaGlzLkRFRkFVTFRfVkFMVUUgPSAnTUFYJztcblxuY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdHNMaXN0ID0gbmV3IFByb2plY3RMaXN0KCdhY3RpdmUnKTtcbiAgICBjb25zdCBmaW5pc2hlZFByb2plY3RzTGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgnZmluaXNoZWQnKTtcbiAgICBhY3RpdmVQcm9qZWN0c0xpc3Quc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKFxuICAgICAgZmluaXNoZWRQcm9qZWN0c0xpc3QuYWRkUHJvamVjdC5iaW5kKGZpbmlzaGVkUHJvamVjdHNMaXN0KVxuICAgICk7XG4gICAgZmluaXNoZWRQcm9qZWN0c0xpc3Quc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKFxuICAgICAgYWN0aXZlUHJvamVjdHNMaXN0LmFkZFByb2plY3QuYmluZChhY3RpdmVQcm9qZWN0c0xpc3QpXG4gICAgKTtcblxuICAgIC8vIGNvbnN0IHRpbWVySWQgPSBzZXRUaW1lb3V0KHRoaXMuc3RhcnRBbmFseXRpY3MsIDMwMDApO1xuXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3AtYW5hbHl0aWNzLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgc3RhdGljIHN0YXJ0QW5hbHl0aWNzKCkge1xuICAgIGNvbnN0IGFuYWx5dGljc1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGFuYWx5dGljc1NjcmlwdC5zcmMgPSAnYXNzZXRzL3NjcmlwdHMvVXRpbGl0eS9BbmFseXRpY3MuanMnO1xuICAgIGFuYWx5dGljc1NjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoYW5hbHl0aWNzU2NyaXB0KTtcbiAgfVxufVxuXG5BcHAuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "tooling-01:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "assets/scripts/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktooling_01"] = self["webpackChunktooling_01"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;