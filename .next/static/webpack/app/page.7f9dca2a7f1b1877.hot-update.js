"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/TodoList.tsx":
/*!*************************************!*\
  !*** ./app/components/TodoList.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineDeleteOutline!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoAddCircleOutline!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TodoList = ()=>{\n    _s();\n    const [currentProjectIndex, setCurrentProjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const storedTodoList = JSON.parse(localStorage.getItem(\"todos-\".concat(currentProjectIndex)));\n    const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedProjects || []);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedTodoList || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProjects = localStorage.getItem(\"projects\");\n        if (savedProjects) {\n            setProjects(JSON.parse(savedProjects));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTodos = localStorage.getItem(\"todos-\".concat(currentProjectIndex));\n        if (savedTodos) {\n            setTodos(JSON.parse(savedTodos));\n        }\n    }, [\n        currentProjectIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (projects.length >= 0) {\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n    }, [\n        projects\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (todos.length >= 0) {\n            localStorage.setItem(\"todos-\".concat(currentProjectIndex), JSON.stringify(todos));\n        }\n    }, [\n        todos,\n        currentProjectIndex\n    ]);\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleAddTodo = ()=>{\n        if (inputValue.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                inputValue\n            ]);\n            setInputValue(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const updatedTodos = [\n            ...todos\n        ];\n        updatedTodos.splice(index, 1);\n        setTodos(updatedTodos);\n    };\n    const handleAddProject = ()=>{\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            setProjects([\n                ...projects,\n                projectName\n            ]);\n        }\n        setCurrentProjectIndex(projectName);\n        localStorage.setItem(\"todos-\".concat(projectName), JSON.stringify([]));\n    };\n    const handleDeleteProject = (project)=>{\n        setCurrentProjectIndex(project);\n        localStorage.setItem(\"todos-\".concat(project), JSON.stringify([]));\n        const updatedProjects = [\n            ...projects\n        ];\n        const indexA = updatedProjects.indexOf(project);\n        updatedProjects.splice(indexA, 1);\n        setProjects(updatedProjects);\n    };\n    const handleProjectChange = (index)=>{\n        setCurrentProjectIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black md:w-1/6 text-white p-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl\",\n                        children: \"Todo list\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl text-white mt-10\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex justify-between \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"hover:bg-slate-300\",\n                                        onClick: ()=>handleProjectChange(project),\n                                        children: project\n                                    }, index, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteProject(project),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineDeleteOutline, {}, void 0, false, {\n                                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAddProject,\n                        children: \"Add Project\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-4xl font-black\",\n                        children: currentProjectIndex\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: inputValue,\n                        onChange: handleInputChange,\n                        placeholder: \"Add new todo...\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-5\",\n                        onClick: handleAddTodo,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mr-2\",\n                                children: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoAddCircleOutline, {}, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    todo,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteTodo(index),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"E0aDG+4kr5cN2pZkzdrUeOnQ8Dc=\");\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QztBQUNZO0FBQ0g7QUFJckQsTUFBTUksV0FBVzs7SUFDYixNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU1PLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsU0FBNkIsT0FBcEJOO0lBQ2hFLE1BQU1PLGlCQUFpQkosS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDekQsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDWSxrQkFBa0IsRUFBRTtJQUU3RCxNQUFNLENBQUNHLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2lCLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDTyxrQkFBa0IsRUFBRTtJQUl2RE4sZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsZ0JBQWdCVCxhQUFhQyxPQUFPLENBQUM7UUFDM0MsSUFBSVEsZUFBZTtZQUNqQkwsWUFBWU4sS0FBS0MsS0FBSyxDQUFDVTtRQUN6QjtJQUNGLEdBQUcsRUFBRTtJQUVMbEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsYUFBYVYsYUFBYUMsT0FBTyxDQUFDLFNBQTZCLE9BQXBCTjtRQUNqRCxJQUFJZSxZQUFZO1lBQ2RGLFNBQVNWLEtBQUtDLEtBQUssQ0FBQ1c7UUFDdEI7SUFDRixHQUFHO1FBQUNmO0tBQW9CO0lBRXhCSixnREFBU0EsQ0FBQztRQUNSLElBQUlZLFNBQVNRLE1BQU0sSUFBSSxHQUFHO1lBQ3RCWCxhQUFhWSxPQUFPLENBQUMsWUFBWWQsS0FBS2UsU0FBUyxDQUFDVjtRQUNwRDtJQUVGLEdBQUc7UUFBQ0E7S0FBUztJQUViWixnREFBU0EsQ0FBQztRQUNSLElBQUlnQixNQUFNSSxNQUFNLElBQUksR0FBRztZQUNuQlgsYUFBYVksT0FBTyxDQUFDLFNBQTZCLE9BQXBCakIsc0JBQXVCRyxLQUFLZSxTQUFTLENBQUNOO1FBQ3hFO0lBRUYsR0FBRztRQUFDQTtRQUFPWjtLQUFvQjtJQUUvQixNQUFNbUIsb0JBQW9CLENBQUNDO1FBQ3pCVCxjQUFjUyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNQyxnQkFBZ0I7UUFDcEIsSUFBSWIsV0FBV2MsSUFBSSxPQUFPLElBQUk7WUFDNUJYLFNBQVM7bUJBQUlEO2dCQUFPRjthQUFXO1lBQy9CQyxjQUFjO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNYyxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsZUFBZTtlQUFJZjtTQUFNO1FBQy9CZSxhQUFhQyxNQUFNLENBQUNGLE9BQU87UUFDM0JiLFNBQVNjO0lBQ1g7SUFFQSxNQUFNRSxtQkFBbUI7UUFDdkIsTUFBTUMsY0FBY0MsT0FBTztRQUMzQixJQUFJRCxhQUFhO1lBQ2ZyQixZQUFZO21CQUFJRDtnQkFBVXNCO2FBQVk7UUFDeEM7UUFDQTdCLHVCQUF1QjZCO1FBQ3ZCekIsYUFBYVksT0FBTyxDQUFDLFNBQXFCLE9BQVphLGNBQWUzQixLQUFLZSxTQUFTLENBQUMsRUFBRTtJQUVoRTtJQUVBLE1BQU1jLHNCQUFzQixDQUFDQztRQUMzQmhDLHVCQUF1QmdDO1FBRXZCNUIsYUFBYVksT0FBTyxDQUFDLFNBQWlCLE9BQVJnQixVQUFXOUIsS0FBS2UsU0FBUyxDQUFDLEVBQUU7UUFHMUQsTUFBTWdCLGtCQUFrQjtlQUFJMUI7U0FBUztRQUNyQyxNQUFNMkIsU0FBU0QsZ0JBQWdCRSxPQUFPLENBQUNIO1FBQ3ZDQyxnQkFBZ0JOLE1BQU0sQ0FBQ08sUUFBUTtRQUMvQjFCLFlBQVl5QjtJQUdkO0lBRUEsTUFBTUcsc0JBQXNCLENBQUNYO1FBQzNCekIsdUJBQXVCeUI7SUFDekI7SUFFQSxxQkFDRSw4REFBQ1k7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQVc7Ozs7OztrQ0FDekIsOERBQUNFO3dCQUFHRixXQUFVO2tDQUE0Qjs7Ozs7O2tDQUMxQyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBRVYvQixTQUFTa0MsR0FBRyxDQUFDLENBQUNULFNBQVNQLHNCQUN4Qiw4REFBQ1k7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDSTt3Q0FBbUJKLFdBQVU7d0NBQXFCSyxTQUFTLElBQU1QLG9CQUFvQko7a0RBQ2pGQTt1Q0FEUVA7Ozs7O2tEQUdULDhEQUFDaUI7d0NBQU9DLFNBQVMsSUFBTVosb0JBQW9CQztrREFDM0MsNEVBQUNwQyxnSEFBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTW5DLDhEQUFDOEM7d0JBQU9DLFNBQVNmO2tDQUFrQjs7Ozs7Ozs7Ozs7OzBCQUdyQyw4REFBQ1M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYnZDOzs7Ozs7a0NBR0osOERBQUM2Qzt3QkFDQ0MsTUFBSzt3QkFDTHhCLE9BQU9aO3dCQUNQcUMsVUFBVTVCO3dCQUNWNkIsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDTDt3QkFBT0osV0FBVTt3QkFBMEdLLFNBQVNyQjs7MENBQ25JLDhEQUFDMEI7Z0NBQUdWLFdBQVU7MENBQU87Ozs7OzswQ0FDckIsOERBQUN6Qyx5R0FBa0JBOzs7Ozs7Ozs7OztrQ0FFckIsOERBQUNvRDtrQ0FDRXRDLE1BQU04QixHQUFHLENBQUMsQ0FBQ1MsTUFBTXpCLHNCQUNoQiw4REFBQzBCOztvQ0FDRUQ7a0RBQ0QsOERBQUNSO3dDQUFPQyxTQUFTLElBQU1uQixpQkFBaUJDO2tEQUFROzs7Ozs7OytCQUZ6Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkI7R0FwSU0zQjtLQUFBQTtBQXNJTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/NTdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHRvZG8gfSBmcm9tICdub2RlOnRlc3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1kT3V0bGluZURlbGV0ZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IElvQWRkQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuXG5cbmNvbnN0IFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50UHJvamVjdEluZGV4LCBzZXRDdXJyZW50UHJvamVjdEluZGV4XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBzdG9yZWRUb2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG9zLSR7Y3VycmVudFByb2plY3RJbmRleH1gKSk7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKHN0b3JlZFByb2plY3RzIHx8IFtdKTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoc3RvcmVkVG9kb0xpc3QgfHwgW10pO1xuXG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgIHNldFByb2plY3RzKEpTT04ucGFyc2Uoc2F2ZWRQcm9qZWN0cykpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRUb2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2Rvcy0ke2N1cnJlbnRQcm9qZWN0SW5kZXh9YCk7XG4gICAgaWYgKHNhdmVkVG9kb3MpIHtcbiAgICAgIHNldFRvZG9zKEpTT04ucGFyc2Uoc2F2ZWRUb2RvcykpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRQcm9qZWN0SW5kZXhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPj0gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgICBcbiAgfSwgW3Byb2plY3RzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodG9kb3MubGVuZ3RoID49IDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9zLSR7Y3VycmVudFByb2plY3RJbmRleH1gLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cbiAgICBcbiAgfSwgW3RvZG9zLCBjdXJyZW50UHJvamVjdEluZGV4XSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0VmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCBpbnB1dFZhbHVlXSk7XG4gICAgICBzZXRJbnB1dFZhbHVlKCcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IFsuLi50b2Rvc107XG4gICAgdXBkYXRlZFRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0VG9kb3ModXBkYXRlZFRvZG9zKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvbXB0KCdFbnRlciBwcm9qZWN0IG5hbWU6Jyk7XG4gICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICBzZXRQcm9qZWN0cyhbLi4ucHJvamVjdHMsIHByb2plY3ROYW1lXSk7XG4gICAgfVxuICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgocHJvamVjdE5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2Rvcy0ke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KHByb2plY3QpO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2Rvcy0ke3Byb2plY3R9YCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuICAgIFxuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IFsuLi5wcm9qZWN0c107XG4gICAgY29uc3QgaW5kZXhBID0gdXBkYXRlZFByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgdXBkYXRlZFByb2plY3RzLnNwbGljZShpbmRleEEsIDEpO1xuICAgIHNldFByb2plY3RzKHVwZGF0ZWRQcm9qZWN0cyk7XG5cbiAgICBcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcm9qZWN0Q2hhbmdlID0gKGluZGV4KSA9PiB7XG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLXNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBtZDp3LTEvNiB0ZXh0LXdoaXRlIHAtNSBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsXCI+VG9kbyBsaXN0PC9oMT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGUgbXQtMTBcIj5Qcm9qZWN0czwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICc+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktYmV0d2VlbiBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT0naG92ZXI6Ymctc2xhdGUtMzAwJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9qZWN0Q2hhbmdlKHByb2plY3QpfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3R9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlUHJvamVjdChwcm9qZWN0KX0+XG4gICAgICAgICAgICAgICAgICAgIDxNZE91dGxpbmVEZWxldGVPdXRsaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRQcm9qZWN0fT5BZGQgUHJvamVjdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYmxhY2snPlxuICAgICAgICAge2N1cnJlbnRQcm9qZWN0SW5kZXh9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIG5ldyB0b2RvLi4uXCJcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTMwMCBob3ZlcjpiZy1ncmVlbi00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIG1sLTVcIiBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfT5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1yLTJcIj5BZGQgVG9kbzwvaDU+XG4gICAgICAgIDxJb0FkZENpcmNsZU91dGxpbmUgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAge3RvZG99XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRvZG8oaW5kZXgpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWRPdXRsaW5lRGVsZXRlT3V0bGluZSIsIklvQWRkQ2lyY2xlT3V0bGluZSIsIlRvZG9MaXN0IiwiY3VycmVudFByb2plY3RJbmRleCIsInNldEN1cnJlbnRQcm9qZWN0SW5kZXgiLCJzdG9yZWRUb2RvTGlzdCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRQcm9qZWN0cyIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInRvZG9zIiwic2V0VG9kb3MiLCJzYXZlZFByb2plY3RzIiwic2F2ZWRUb2RvcyIsImxlbmd0aCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFkZFRvZG8iLCJ0cmltIiwiaGFuZGxlRGVsZXRlVG9kbyIsImluZGV4IiwidXBkYXRlZFRvZG9zIiwic3BsaWNlIiwiaGFuZGxlQWRkUHJvamVjdCIsInByb2plY3ROYW1lIiwicHJvbXB0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsInByb2plY3QiLCJ1cGRhdGVkUHJvamVjdHMiLCJpbmRleEEiLCJpbmRleE9mIiwiaGFuZGxlUHJvamVjdENoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDMiLCJtYXAiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImg1IiwidWwiLCJ0b2RvIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoList.tsx\n"));

/***/ })

});