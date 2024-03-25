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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineDeleteOutline!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoAddCircleOutline!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TodoList = ()=>{\n    _s();\n    const [currentProjectIndex, setCurrentProjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Home\");\n    const [curCheck, setCurCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const storedTodoCheck = JSON.parse(localStorage.getItem(\"todos-\".concat(currentProjectIndex, \"-\").concat(curCheck)));\n    const storedTodoList = JSON.parse(localStorage.getItem(\"todos-\".concat(currentProjectIndex)));\n    const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedProjects || []);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedTodoList || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProjects = localStorage.getItem(\"projects\");\n        if (savedProjects) {\n            setProjects(JSON.parse(savedProjects));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTodos = localStorage.getItem(\"todos-\".concat(currentProjectIndex));\n        if (savedTodos) {\n            setTodos(JSON.parse(savedTodos));\n        }\n    }, [\n        currentProjectIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (projects.length >= 0) {\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n    }, [\n        projects\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (todos.length >= 0) {\n            localStorage.setItem(\"todos-\".concat(currentProjectIndex), JSON.stringify(todos));\n        }\n    }, [\n        todos,\n        currentProjectIndex\n    ]);\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleAddTodo = ()=>{\n        if (inputValue.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                inputValue\n            ]);\n            setInputValue(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const updatedTodos = [\n            ...todos\n        ];\n        updatedTodos.splice(index, 1);\n        setTodos(updatedTodos);\n    };\n    const handleAddProject = ()=>{\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            setProjects([\n                ...projects,\n                projectName\n            ]);\n        }\n        setCurrentProjectIndex(projectName);\n        localStorage.setItem(\"todos-\".concat(projectName), JSON.stringify([]));\n    };\n    const handleDeleteProject = (project)=>{\n        setCurrentProjectIndex(project);\n        localStorage.setItem(\"todos-\".concat(project), JSON.stringify([]));\n        const updatedProjects = [\n            ...projects\n        ];\n        const indexA = updatedProjects.indexOf(project);\n        updatedProjects.splice(indexA, 1);\n        setProjects(updatedProjects);\n    };\n    const handleProjectChange = (index)=>{\n        setCurrentProjectIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black md:w-1/6 text-white p-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-black\",\n                        children: \"Todo list\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 text-xl \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"hover:bg-slate-300\",\n                            onClick: ()=>handleProjectChange(\"Home\"),\n                            children: \"Home\"\n                        }, 0, false, {\n                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl text-white mt-5 font-bold\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex justify-between \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"hover:bg-slate-300\",\n                                        onClick: ()=>handleProjectChange(project),\n                                        children: project\n                                    }, index, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteProject(project),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineDeleteOutline, {}, void 0, false, {\n                                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-5 mt-5\",\n                        onClick: handleAddProject,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mr-2\",\n                                children: \"Add Project\"\n                            }, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoAddCircleOutline, {}, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl font-black mb-10\",\n                        children: currentProjectIndex\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: inputValue,\n                        onChange: handleInputChange,\n                        placeholder: \"Add new todo...\",\n                        className: \"h-10\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center \",\n                        onClick: handleAddTodo,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mr-2\",\n                                children: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoAddCircleOutline, {}, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mt-10\",\n                        children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox mr-5\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 145,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    todo,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"ml-5 bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center \",\n                                        onClick: ()=>handleDeleteTodo(index),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"3I7ca6IFAR/+5GMsD1NkXxQaEIQ=\");\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QztBQUNZO0FBQ0g7QUFJckQsTUFBTUksV0FBVzs7SUFDYixNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNUyxrQkFBa0JDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLFNBQWdDTixPQUF2QkYscUJBQW9CLEtBQVksT0FBVEU7SUFDeEYsTUFBTU8saUJBQWlCSixLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQyxTQUE2QixPQUFwQlI7SUFDaEUsTUFBTVUsaUJBQWlCTCxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQztJQUN6RCxNQUFNLENBQUNHLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDZSxrQkFBa0IsRUFBRTtJQUU3RCxNQUFNLENBQUNHLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ29CLE9BQU9DLFNBQVMsR0FBR3JCLCtDQUFRQSxDQUFDYyxrQkFBa0IsRUFBRTtJQUl2RGIsZ0RBQVNBLENBQUM7UUFDUixNQUFNcUIsZ0JBQWdCVixhQUFhQyxPQUFPLENBQUM7UUFDM0MsSUFBSVMsZUFBZTtZQUNqQkwsWUFBWVAsS0FBS0MsS0FBSyxDQUFDVztRQUN6QjtJQUNGLEdBQUcsRUFBRTtJQUVMckIsZ0RBQVNBLENBQUM7UUFDUixNQUFNc0IsYUFBYVgsYUFBYUMsT0FBTyxDQUFDLFNBQTZCLE9BQXBCUjtRQUNqRCxJQUFJa0IsWUFBWTtZQUNkRixTQUFTWCxLQUFLQyxLQUFLLENBQUNZO1FBQ3RCO0lBQ0YsR0FBRztRQUFDbEI7S0FBb0I7SUFFeEJKLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWUsU0FBU1EsTUFBTSxJ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QUFrQkE7Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ3VEO3dCQUFHWCxXQUFVO2tDQUNYM0IsTUFBTWdDLEdBQUcsQ0FBQyxDQUFDTyxNQUFNekIsc0JBQ2hCLDhEQUFDMEI7O2tEQUNDLDhEQUFDTjt3Q0FBTUMsTUFBSzs7Ozs7O29DQUNYSTtrREFDRCw4REFBQ1Y7d0NBQU9GLFdBQVU7d0NBQXVHRyxTQUFTLElBQU1qQixpQkFBaUJDO2tEQUFROzs7Ozs7OytCQUgxSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbkI7R0FqSk05QjtLQUFBQTtBQW1KTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/NTdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHRvZG8gfSBmcm9tICdub2RlOnRlc3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1kT3V0bGluZURlbGV0ZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IElvQWRkQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuXG5cbmNvbnN0IFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50UHJvamVjdEluZGV4LCBzZXRDdXJyZW50UHJvamVjdEluZGV4XSA9IHVzZVN0YXRlKCdIb21lJyk7XG4gICAgY29uc3QgW2N1ckNoZWNrLCBzZXRDdXJDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc3RvcmVkVG9kb0NoZWNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdG9kb3MtJHtjdXJyZW50UHJvamVjdEluZGV4fS0ke2N1ckNoZWNrfWApKTtcbiAgICBjb25zdCBzdG9yZWRUb2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG9zLSR7Y3VycmVudFByb2plY3RJbmRleH1gKSk7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKHN0b3JlZFByb2plY3RzIHx8IFtdKTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoc3RvcmVkVG9kb0xpc3QgfHwgW10pO1xuXG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgIHNldFByb2plY3RzKEpTT04ucGFyc2Uoc2F2ZWRQcm9qZWN0cykpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRUb2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2Rvcy0ke2N1cnJlbnRQcm9qZWN0SW5kZXh9YCk7XG4gICAgaWYgKHNhdmVkVG9kb3MpIHtcbiAgICAgIHNldFRvZG9zKEpTT04ucGFyc2Uoc2F2ZWRUb2RvcykpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRQcm9qZWN0SW5kZXhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPj0gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgICBcbiAgfSwgW3Byb2plY3RzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodG9kb3MubGVuZ3RoID49IDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9zLSR7Y3VycmVudFByb2plY3RJbmRleH1gLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cbiAgICBcbiAgfSwgW3RvZG9zLCBjdXJyZW50UHJvamVjdEluZGV4XSk7XG5cblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXRWYWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIGlucHV0VmFsdWVdKTtcbiAgICAgIHNldElucHV0VmFsdWUoJycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFRvZG9zID0gWy4uLnRvZG9zXTtcbiAgICB1cGRhdGVkVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoJ0VudGVyIHByb2plY3QgbmFtZTonKTtcbiAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgIHNldFByb2plY3RzKFsuLi5wcm9qZWN0cywgcHJvamVjdE5hbWVdKTtcbiAgICB9XG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9zLSR7cHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgocHJvamVjdCk7XG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9zLSR7cHJvamVjdH1gLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuXG4gICAgXG4gICAgY29uc3QgdXBkYXRlZFByb2plY3RzID0gWy4uLnByb2plY3RzXTtcbiAgICBjb25zdCBpbmRleEEgPSB1cGRhdGVkUHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICB1cGRhdGVkUHJvamVjdHMuc3BsaWNlKGluZGV4QSwgMSk7XG4gICAgc2V0UHJvamVjdHModXBkYXRlZFByb2plY3RzKTtcblxuICAgIFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByb2plY3RDaGFuZ2UgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIG1kOnctMS82IHRleHQtd2hpdGUgcC01IFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ibGFja1wiPlRvZG8gbGlzdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC14bCBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MH0gY2xhc3NOYW1lPSdob3ZlcjpiZy1zbGF0ZS0zMDAnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RDaGFuZ2UoXCJIb21lXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSBtdC01IGZvbnQtYm9sZFwiPlByb2plY3RzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1iZXR3ZWVuIFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdob3ZlcjpiZy1zbGF0ZS0zMDAnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RDaGFuZ2UocHJvamVjdCl9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QpfT5cbiAgICAgICAgICAgICAgICAgICAgPE1kT3V0bGluZURlbGV0ZU91dGxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTMwMCBob3ZlcjpiZy1ncmVlbi00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIG1sLTUgbXQtNVwiIG9uQ2xpY2s9e2hhbmRsZUFkZFByb2plY3R9PlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0nbXItMic+QWRkIFByb2plY3Q8L2g1PlxuICAgICAgICAgICAgPElvQWRkQ2lyY2xlT3V0bGluZSAvPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYmxhY2sgbWItMTAnPlxuICAgICAgICAge2N1cnJlbnRQcm9qZWN0SW5kZXh9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIG5ldyB0b2RvLi4uXCJcbiAgICAgICAgY2xhc3NOYW1lPSdoLTEwJ1xuICAgICAgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tMzAwIGhvdmVyOmJnLWdyZWVuLTQwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgXCIgb25DbGljaz17aGFuZGxlQWRkVG9kb30+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtci0yXCI+QWRkIFRvZG88L2g1PlxuICAgICAgICA8SW9BZGRDaXJjbGVPdXRsaW5lIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPHVsIGNsYXNzTmFtZT0nbXQtMTAnPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3ggbXItNVwiIC8+XG4gICAgICAgICAgICB7dG9kb31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtbC01IGJnLXJlZC0zMDAgaG92ZXI6YmctcmVkLTQwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUb2RvKGluZGV4KX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1kT3V0bGluZURlbGV0ZU91dGxpbmUiLCJJb0FkZENpcmNsZU91dGxpbmUiLCJUb2RvTGlzdCIsImN1cnJlbnRQcm9qZWN0SW5kZXgiLCJzZXRDdXJyZW50UHJvamVjdEluZGV4IiwiY3VyQ2hlY2siLCJzZXRDdXJDaGVjayIsInN0b3JlZFRvZG9DaGVjayIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRUb2RvTGlzdCIsInN0b3JlZFByb2plY3RzIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwidG9kb3MiLCJzZXRUb2RvcyIsInNhdmVkUHJvamVjdHMiLCJzYXZlZFRvZG9zIiwibGVuZ3RoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQWRkVG9kbyIsInRyaW0iLCJoYW5kbGVEZWxldGVUb2RvIiwiaW5kZXgiLCJ1cGRhdGVkVG9kb3MiLCJzcGxpY2UiLCJoYW5kbGVBZGRQcm9qZWN0IiwicHJvamVjdE5hbWUiLCJwcm9tcHQiLCJoYW5kbGVEZWxldGVQcm9qZWN0IiwicHJvamVjdCIsInVwZGF0ZWRQcm9qZWN0cyIsImluZGV4QSIsImluZGV4T2YiLCJoYW5kbGVQcm9qZWN0Q2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiLCJtYXAiLCJoNSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ1bCIsInRvZG8iLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoList.tsx\n"));

/***/ })

});