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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineDeleteOutline!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoAddCircleOutline!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TodoList = ()=>{\n    _s();\n    const [currentProjectIndex, setCurrentProjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const storedTodoList = JSON.parse(localStorage.getItem(\"todos-\".concat(currentProjectIndex)));\n    const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedProjects || []);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedTodoList || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProjects = localStorage.getItem(\"projects\");\n        if (savedProjects) {\n            setProjects(JSON.parse(savedProjects));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTodos = localStorage.getItem(\"todos-\".concat(currentProjectIndex));\n        if (savedTodos) {\n            setTodos(JSON.parse(savedTodos));\n        }\n    }, [\n        currentProjectIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (projects.length >= 0) {\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n    }, [\n        projects\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (todos.length >= 0) {\n            localStorage.setItem(\"todos-\".concat(currentProjectIndex), JSON.stringify(todos));\n        }\n    }, [\n        todos,\n        currentProjectIndex\n    ]);\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleAddTodo = ()=>{\n        if (inputValue.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                inputValue\n            ]);\n            setInputValue(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const updatedTodos = [\n            ...todos\n        ];\n        updatedTodos.splice(index, 1);\n        setTodos(updatedTodos);\n    };\n    const handleAddProject = ()=>{\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            setProjects([\n                ...projects,\n                projectName\n            ]);\n        }\n        setCurrentProjectIndex(projectName);\n        localStorage.setItem(\"todos-\".concat(projectName), JSON.stringify([]));\n    };\n    const handleDeleteProject = (project)=>{\n        setCurrentProjectIndex(project);\n        localStorage.setItem(\"todos-\".concat(project), JSON.stringify([]));\n        const updatedProjects = [\n            ...projects\n        ];\n        const indexA = updatedProjects.indexOf(project);\n        updatedProjects.splice(indexA, 1);\n        setProjects(updatedProjects);\n    };\n    const handleProjectChange = (index)=>{\n        setCurrentProjectIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black md:w-1/6 text-white p-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl\",\n                        children: \"Todo list\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl text-white mt-10\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex justify-between \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"hover:bg-slate-300\",\n                                        onClick: ()=>handleProjectChange(project),\n                                        children: project\n                                    }, index, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteProject(project),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineDeleteOutline, {}, void 0, false, {\n                                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAddProject,\n                        children: \"Add Project\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-10\",\n                children: [\n                    currentProjectIndex,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: inputValue,\n                        onChange: handleInputChange,\n                        placeholder: \"Add new todo...\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center\",\n                        onClick: handleAddTodo,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoAddCircleOutline, {}, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    todo,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteTodo(index),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"E0aDG+4kr5cN2pZkzdrUeOnQ8Dc=\");\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QztBQUNZO0FBQ0g7QUFJckQsTUFBTUksV0FBVzs7SUFDYixNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU1PLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsU0FBNkIsT0FBcEJOO0lBQ2hFLE1BQU1PLGlCQUFpQkosS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDekQsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDWSxrQkFBa0IsRUFBRTtJQUU3RCxNQUFNLENBQUNHLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2lCLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDTyxrQkFBa0IsRUFBRTtJQUl2RE4sZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsZ0JBQWdCVCxhQUFhQyxPQUFPLENBQUM7UUFDM0MsSUFBSVEsZUFBZTtZQUNqQkwsWUFBWU4sS0FBS0MsS0FBSyxDQUFDVTtRQUN6QjtJQUNGLEdBQUcsRUFBRTtJQUVMbEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsYUFBYVYsYUFBYUMsT0FBTyxDQUFDLFNBQTZCLE9BQXBCTjtRQUNqRCxJQUFJZSxZQUFZO1lBQ2RGLFNBQVNWLEtBQUtDLEtBQUssQ0FBQ1c7UUFDdEI7SUFDRixHQUFHO1FBQUNmO0tBQW9CO0lBRXhCSixnREFBU0EsQ0FBQztRQUNSLElBQUlZLFNBQVNRLE1BQU0sSUFBSSxHQUFHO1lBQ3RCWCxhQUFhWSxPQUFPLENBQUMsWUFBWWQsS0FBS2UsU0FBUyxDQUFDVjtRQUNwRDtJQUVGLEdBQUc7UUFBQ0E7S0FBUztJQUViWixnREFBU0EsQ0FBQztRQUNSLElBQUlnQixNQUFNSSxNQUFNLElBQUksR0FBRztZQUNuQlgsYUFBYVksT0FBTyxDQUFDLFNBQTZCLE9BQXBCakIsc0JBQXVCRyxLQUFLZSxTQUFTLENBQUNOO1FBQ3hFO0lBRUYsR0FBRztRQUFDQTtRQUFPWjtLQUFvQjtJQUUvQixNQUFNbUIsb0JBQW9CLENBQUNDO1FBQ3pCVCxjQUFjUyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNQyxnQkFBZ0I7UUFDcEIsSUFBSWIsV0FBV2MsSUFBSSxPQUFPLElBQUk7WUFDNUJYLFNBQVM7bUJBQUlEO2dCQUFPRjthQUFXO1lBQy9CQyxjQUFjO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNYyxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsZUFBZTtlQUFJZjtTQUFNO1FBQy9CZSxhQUFhQyxNQUFNLENBQUNGLE9BQU87UUFDM0JiLFNBQVNjO0lBQ1g7SUFFQSxNQUFNRSxtQkFBbUI7UUFDdkIsTUFBTUMsY0FBY0MsT0FBTztRQUMzQixJQUFJRCxhQUFhO1lBQ2ZyQixZQUFZO21CQUFJRDtnQkFBVXNCO2FBQVk7UUFDeEM7UUFDQTdCLHVCQUF1QjZCO1FBQ3ZCekIsYUFBYVksT0FBTyxDQUFDLFNBQXFCLE9BQVphLGNBQWUzQixLQUFLZSxTQUFTLENBQUMsRUFBRTtJQUVoRTtJQUVBLE1BQU1jLHNCQUFzQixDQUFDQztRQUMzQmhDLHVCQUF1QmdDO1FBRXZCNUIsYUFBYVksT0FBTyxDQUFDLFNBQWlCLE9BQVJnQixVQUFXOUIsS0FBS2UsU0FBUyxDQUFDLEVBQUU7UUFHMUQsTUFBTWdCLGtCQUFrQjtlQUFJMUI7U0FBUztRQUNyQyxNQUFNMkIsU0FBU0QsZ0JBQWdCRSxPQUFPLENBQUNIO1FBQ3ZDQyxnQkFBZ0JOLE1BQU0sQ0FBQ08sUUFBUTtRQUMvQjFCLFlBQVl5QjtJQUdkO0lBRUEsTUFBTUcsc0JBQXNCLENBQUNYO1FBQzNCekIsdUJBQXVCeUI7SUFDekI7SUFFQSxxQkFDRSw4REFBQ1k7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQVc7Ozs7OztrQ0FDekIsOERBQUNFO3dCQUFHRixXQUFVO2tDQUE0Qjs7Ozs7O2tDQUMxQyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBRVYvQixTQUFTa0MsR0FBRyxDQUFDLENBQUNULFNBQVNQLHNCQUN4Qiw4REFBQ1k7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDSTt3Q0FBbUJKLFdBQVU7d0NBQXFCSyxTQUFTLElBQU1QLG9CQUFvQko7a0RBQ2pGQTt1Q0FEUVA7Ozs7O2tEQUdULDhEQUFDaUI7d0NBQU9DLFNBQVMsSUFBTVosb0JBQW9CQztrREFDM0MsNEVBQUNwQyxnSEFBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTW5DLDhEQUFDOEM7d0JBQU9DLFNBQVNmO2tDQUFrQjs7Ozs7Ozs7Ozs7OzBCQUdyQyw4REFBQ1M7Z0JBQUlDLFdBQVU7O29CQUNadkM7a0NBRUgsOERBQUM2Qzt3QkFDQ0MsTUFBSzt3QkFDTHhCLE9BQU9aO3dCQUNQcUMsVUFBVTVCO3dCQUNWNkIsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDTDt3QkFBT0osV0FBVTt3QkFBcUdLLFNBQVNyQjs7MENBQzlILDhEQUFDMEI7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ25ELHlHQUFrQkE7Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ29EO2tDQUNFdEMsTUFBTThCLEdBQUcsQ0FBQyxDQUFDUyxNQUFNekIsc0JBQ2hCLDhEQUFDMEI7O29DQUNFRDtrREFDRCw4REFBQ1I7d0NBQU9DLFNBQVMsSUFBTW5CLGlCQUFpQkM7a0RBQVE7Ozs7Ozs7K0JBRnpDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuQjtHQWxJTTNCO0tBQUFBO0FBb0lOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD81N2IzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdG9kbyB9IGZyb20gJ25vZGU6dGVzdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWRPdXRsaW5lRGVsZXRlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgSW9BZGRDaXJjbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuXG5cblxuY29uc3QgVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRQcm9qZWN0SW5kZXgsIHNldEN1cnJlbnRQcm9qZWN0SW5kZXhdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IHN0b3JlZFRvZG9MaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdG9kb3MtJHtjdXJyZW50UHJvamVjdEluZGV4fWApKTtcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoc3RvcmVkUHJvamVjdHMgfHwgW10pO1xuXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShzdG9yZWRUb2RvTGlzdCB8fCBbXSk7XG5cbiAgXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgc2V0UHJvamVjdHMoSlNPTi5wYXJzZShzYXZlZFByb2plY3RzKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZFRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG9zLSR7Y3VycmVudFByb2plY3RJbmRleH1gKTtcbiAgICBpZiAoc2F2ZWRUb2Rvcykge1xuICAgICAgc2V0VG9kb3MoSlNPTi5wYXJzZShzYXZlZFRvZG9zKSk7XG4gICAgfVxuICB9LCBbY3VycmVudFByb2plY3RJbmRleF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICAgIFxuICB9LCBbcHJvamVjdHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPj0gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb3MtJHtjdXJyZW50UHJvamVjdEluZGV4fWAsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfVxuICAgIFxuICB9LCBbdG9kb3MsIGN1cnJlbnRQcm9qZWN0SW5kZXhdKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXRWYWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIGlucHV0VmFsdWVdKTtcbiAgICAgIHNldElucHV0VmFsdWUoJycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFRvZG9zID0gWy4uLnRvZG9zXTtcbiAgICB1cGRhdGVkVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoJ0VudGVyIHByb2plY3QgbmFtZTonKTtcbiAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgIHNldFByb2plY3RzKFsuLi5wcm9qZWN0cywgcHJvamVjdE5hbWVdKTtcbiAgICB9XG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9zLSR7cHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgocHJvamVjdCk7XG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9zLSR7cHJvamVjdH1gLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuXG4gICAgXG4gICAgY29uc3QgdXBkYXRlZFByb2plY3RzID0gWy4uLnByb2plY3RzXTtcbiAgICBjb25zdCBpbmRleEEgPSB1cGRhdGVkUHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICB1cGRhdGVkUHJvamVjdHMuc3BsaWNlKGluZGV4QSwgMSk7XG4gICAgc2V0UHJvamVjdHModXBkYXRlZFByb2plY3RzKTtcblxuICAgIFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByb2plY3RDaGFuZ2UgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIG1kOnctMS82IHRleHQtd2hpdGUgcC01IFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGxcIj5Ub2RvIGxpc3Q8L2gxPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSBtdC0xMFwiPlByb2plY3RzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1iZXR3ZWVuIFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdob3ZlcjpiZy1zbGF0ZS0zMDAnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RDaGFuZ2UocHJvamVjdCl9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QpfT5cbiAgICAgICAgICAgICAgICAgICAgPE1kT3V0bGluZURlbGV0ZU91dGxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFByb2plY3R9PkFkZCBQcm9qZWN0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMTAnPlxuICAgICAgICB7Y3VycmVudFByb2plY3RJbmRleH1cbiAgICAgICAgXG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBuZXcgdG9kby4uLlwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi0zMDAgaG92ZXI6YmctZ3JlZW4tNDAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiIG9uQ2xpY2s9e2hhbmRsZUFkZFRvZG99PlxuICAgICAgICA8aDU+QWRkIFRvZG88L2g1PlxuICAgICAgICA8SW9BZGRDaXJjbGVPdXRsaW5lIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUb2RvKGluZGV4KX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1kT3V0bGluZURlbGV0ZU91dGxpbmUiLCJJb0FkZENpcmNsZU91dGxpbmUiLCJUb2RvTGlzdCIsImN1cnJlbnRQcm9qZWN0SW5kZXgiLCJzZXRDdXJyZW50UHJvamVjdEluZGV4Iiwic3RvcmVkVG9kb0xpc3QiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkUHJvamVjdHMiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ0b2RvcyIsInNldFRvZG9zIiwic2F2ZWRQcm9qZWN0cyIsInNhdmVkVG9kb3MiLCJsZW5ndGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBZGRUb2RvIiwidHJpbSIsImhhbmRsZURlbGV0ZVRvZG8iLCJpbmRleCIsInVwZGF0ZWRUb2RvcyIsInNwbGljZSIsImhhbmRsZUFkZFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb21wdCIsImhhbmRsZURlbGV0ZVByb2plY3QiLCJwcm9qZWN0IiwidXBkYXRlZFByb2plY3RzIiwiaW5kZXhBIiwiaW5kZXhPZiIsImhhbmRsZVByb2plY3RDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgzIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJoNSIsInVsIiwidG9kbyIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoList.tsx\n"));

/***/ })

});