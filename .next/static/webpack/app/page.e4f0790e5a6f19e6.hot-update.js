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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineDeleteOutline!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoAddCircleOutline!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TodoList = ()=>{\n    _s();\n    const [currentProjectIndex, setCurrentProjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Home\");\n    const storedTodoList = JSON.parse(localStorage.getItem(\"todos-\".concat(currentProjectIndex)));\n    const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedProjects || []);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedTodoList || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProjects = localStorage.getItem(\"projects\");\n        if (savedProjects) {\n            setProjects(JSON.parse(savedProjects));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTodos = localStorage.getItem(\"todos-\".concat(currentProjectIndex));\n        if (savedTodos) {\n            setTodos(JSON.parse(savedTodos));\n        }\n    }, [\n        currentProjectIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (projects.length >= 0) {\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n    }, [\n        projects\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (todos.length >= 0) {\n            localStorage.setItem(\"todos-\".concat(currentProjectIndex), JSON.stringify(todos));\n        }\n    }, [\n        todos,\n        currentProjectIndex\n    ]);\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleAddTodo = ()=>{\n        if (inputValue.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                {\n                    text: inputValue,\n                    completed: false\n                }\n            ]);\n            setInputValue(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const updatedTodos = [\n            ...todos\n        ];\n        updatedTodos.splice(index, 1);\n        setTodos(updatedTodos);\n    };\n    const handleToggleTodo = (index)=>{\n        const updatedTodos = [\n            ...todos\n        ];\n        updatedTodos[index].completed = !updatedTodos[index].completed;\n        setTodos(updatedTodos);\n    };\n    const handleAddProject = ()=>{\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            setProjects([\n                ...projects,\n                projectName\n            ]);\n            setCurrentProjectIndex(projectName);\n            localStorage.setItem(\"todos-\".concat(projectName), JSON.stringify([]));\n        }\n    };\n    const handleDeleteProject = (project)=>{\n        localStorage.removeItem(\"todos-\".concat(project));\n        const updatedProjects = projects.filter((proj)=>proj !== project);\n        setProjects(updatedProjects);\n        if (currentProjectIndex === project) {\n            setCurrentProjectIndex(updatedProjects[0] || \"Home\");\n        }\n    };\n    const handleProjectChange = (index)=>{\n        setCurrentProjectIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black md:w-1/6 text-white p-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-black\",\n                        children: \"Todo list\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 text-xl \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"hover:bg-slate-300\",\n                            onClick: ()=>handleProjectChange(\"Home\"),\n                            children: \"Home\"\n                        }, 0, false, {\n                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl text-white mt-5 font-bold\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex justify-between \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"hover:bg-slate-300\",\n                                        onClick: ()=>handleProjectChange(project),\n                                        children: project\n                                    }, index, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteProject(project),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineDeleteOutline, {}, void 0, false, {\n                                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-5 mt-5\",\n                        onClick: handleAddProject,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mr-2\",\n                                children: \"Add Project\"\n                            }, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoAddCircleOutline, {}, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl font-black mb-10\",\n                        children: currentProjectIndex\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: inputValue,\n                        onChange: handleInputChange,\n                        placeholder: \"Add new todo...\",\n                        className: \"h-10\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center \",\n                        onClick: handleAddTodo,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mr-2\",\n                                children: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoAddCircleOutline, {}, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mt-10\",\n                        children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        checked: todo.completed,\n                                        onChange: ()=>handleToggleTodo(index)\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            textDecoration: todo.completed ? \"line-through\" : \"none\"\n                                        },\n                                        children: todo.text\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"ml-5 bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center \",\n                                        onClick: ()=>handleDeleteTodo(index),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"eumdKU41sHGgDi3kYRUvWLo/pMo=\");\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QztBQUNZO0FBQ0g7QUFJckQsTUFBTUksV0FBVzs7SUFDYixNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU1PLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsU0FBNkIsT0FBcEJOO0lBQ2hFLE1BQU1PLGlCQUFpQkosS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDdkQsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDWSxrQkFBa0IsRUFBRTtJQUM3RCxNQUFNLENBQUNHLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2lCLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDTyxrQkFBa0IsRUFBRTtJQUV2RE4sZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsZ0JBQWdCVCxhQUFhQyxPQUFPLENBQUM7UUFDM0MsSUFBSVEsZUFBZTtZQUNqQkwsWUFBWU4sS0FBS0MsS0FBSyxDQUFDVTtRQUN6QjtJQUNGLEdBQUcsRUFBRTtJQUVMbEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsYUFBYVYsYUFBYUMsT0FBTyxDQUFDLFNBQTZCLE9BQXBCTjtRQUNqRCxJQUFJZSxZQUFZO1lBQ2RGLFNBQVNWLEtBQUtDLEtBQUssQ0FBQ1c7UUFDdEI7SUFDRixHQUFHO1FBQUNmO0tBQW9CO0lBRXhCSixnREFBU0EsQ0FBQztRQUNSLElBQUlZLFNBQVNRLE1BQU0sSUFBSSxHQUFHO1lBQ3hCWCxhQUFhWSxPQUFPLENBQUMsWUFBWWQsS0FBS2UsU0FBUyxDQUFDVjtRQUNsRDtJQUNGLEdBQUc7UUFBQ0E7S0FBUztJQUViWixnREFBU0EsQ0FBQztRQUNSLElBQUlnQixNQUFNSSxNQUFNLElBQUksR0FBRztZ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QU87Ozs7OzswQ0FDckIsOERBQUM3Qyx5R0FBa0JBOzs7Ozs7Ozs7OztrQ0FFckIsOERBQUN3RDt3QkFBR1gsV0FBVTtrQ0FDWC9CLE1BQU1vQyxHQUFHLENBQUMsQ0FBQ08sTUFBTTNCLHNCQUNoQiw4REFBQzRCOztrREFDQyw4REFBQ047d0NBQ0NDLE1BQUs7d0NBQ0xNLFNBQVNGLEtBQUs3QixTQUFTO3dDQUN2QjBCLFVBQVUsSUFBTXJCLGlCQUFpQkg7Ozs7OztrREFFbkMsOERBQUM4Qjt3Q0FBS0MsT0FBTzs0Q0FBRUMsZ0JBQWdCTCxLQUFLN0IsU0FBUyxHQUFHLGlCQUFpQjt3Q0FBTztrREFBSTZCLEtBQUs5QixJQUFJOzs7Ozs7a0RBRXJGLDhEQUFDb0I7d0NBQU9GLFdBQVU7d0NBQXVHRyxTQUFTLElBQU1uQixpQkFBaUJDO2tEQUFROzs7Ozs7OytCQVIxSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbkI7R0E5SU03QjtLQUFBQTtBQWdKTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/NTdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHRvZG8gfSBmcm9tICdub2RlOnRlc3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1kT3V0bGluZURlbGV0ZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IElvQWRkQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuXG5cbmNvbnN0IFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50UHJvamVjdEluZGV4LCBzZXRDdXJyZW50UHJvamVjdEluZGV4XSA9IHVzZVN0YXRlKCdIb21lJyk7XG4gICAgY29uc3Qgc3RvcmVkVG9kb0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2Rvcy0ke2N1cnJlbnRQcm9qZWN0SW5kZXh9YCkpO1xuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKHN0b3JlZFByb2plY3RzIHx8IFtdKTtcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShzdG9yZWRUb2RvTGlzdCB8fCBbXSk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBzYXZlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgICBzZXRQcm9qZWN0cyhKU09OLnBhcnNlKHNhdmVkUHJvamVjdHMpKTtcbiAgICAgIH1cbiAgICB9LCBbXSk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBzYXZlZFRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG9zLSR7Y3VycmVudFByb2plY3RJbmRleH1gKTtcbiAgICAgIGlmIChzYXZlZFRvZG9zKSB7XG4gICAgICAgIHNldFRvZG9zKEpTT04ucGFyc2Uoc2F2ZWRUb2RvcykpO1xuICAgICAgfVxuICAgIH0sIFtjdXJyZW50UHJvamVjdEluZGV4XSk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAocHJvamVjdHMubGVuZ3RoID49IDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICAgIH1cbiAgICB9LCBbcHJvamVjdHNdKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICh0b2Rvcy5sZW5ndGggPj0gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb3MtJHtjdXJyZW50UHJvamVjdEluZGV4fWAsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICB9XG4gICAgfSwgW3RvZG9zLCBjdXJyZW50UHJvamVjdEluZGV4XSk7XG4gIFxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gIFxuICAgIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSAoKSA9PiB7XG4gICAgICBpZiAoaW5wdXRWYWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgeyB0ZXh0OiBpbnB1dFZhbHVlLCBjb21wbGV0ZWQ6IGZhbHNlIH1dKTtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gWy4uLnRvZG9zXTtcbiAgICAgIHVwZGF0ZWRUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc2V0VG9kb3ModXBkYXRlZFRvZG9zKTtcbiAgICB9O1xuICBcbiAgICBjb25zdCBoYW5kbGVUb2dnbGVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSBbLi4udG9kb3NdO1xuICAgICAgdXBkYXRlZFRvZG9zW2luZGV4XS5jb21wbGV0ZWQgPSAhdXBkYXRlZFRvZG9zW2luZGV4XS5jb21wbGV0ZWQ7XG4gICAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xuICAgIH07XG4gIFxuICAgIGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdCgnRW50ZXIgcHJvamVjdCBuYW1lOicpO1xuICAgICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHNldFByb2plY3RzKFsuLi5wcm9qZWN0cywgcHJvamVjdE5hbWVdKTtcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2Rvcy0ke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgdG9kb3MtJHtwcm9qZWN0fWApO1xuICAgICAgY29uc3QgdXBkYXRlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKHByb2ogPT4gcHJvaiAhPT0gcHJvamVjdCk7XG4gICAgICBzZXRQcm9qZWN0cyh1cGRhdGVkUHJvamVjdHMpO1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0SW5kZXggPT09IHByb2plY3QpIHtcbiAgICAgICAgc2V0Q3VycmVudFByb2plY3RJbmRleCh1cGRhdGVkUHJvamVjdHNbMF0gfHwgJ0hvbWUnKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBjb25zdCBoYW5kbGVQcm9qZWN0Q2hhbmdlID0gKGluZGV4KSA9PiB7XG4gICAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KGluZGV4KTtcbiAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgbWQ6dy0xLzYgdGV4dC13aGl0ZSBwLTUgXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJsYWNrXCI+VG9kbyBsaXN0PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCB0ZXh0LXhsIFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXswfSBjbGFzc05hbWU9J2hvdmVyOmJnLXNsYXRlLTMwMCcgb25DbGljaz17KCkgPT4gaGFuZGxlUHJvamVjdENoYW5nZShcIkhvbWVcIil9PlxuICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXdoaXRlIG10LTUgZm9udC1ib2xkXCI+UHJvamVjdHM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCAnPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWJldHdlZW4gXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2hvdmVyOmJnLXNsYXRlLTMwMCcgb25DbGljaz17KCkgPT4gaGFuZGxlUHJvamVjdENoYW5nZShwcm9qZWN0KX0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVByb2plY3QocHJvamVjdCl9PlxuICAgICAgICAgICAgICAgICAgICA8TWRPdXRsaW5lRGVsZXRlT3V0bGluZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tMzAwIGhvdmVyOmJnLWdyZWVuLTQwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgbWwtNSBtdC01XCIgb25DbGljaz17aGFuZGxlQWRkUHJvamVjdH0+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdtci0yJz5BZGQgUHJvamVjdDwvaDU+XG4gICAgICAgICAgICA8SW9BZGRDaXJjbGVPdXRsaW5lIC8+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMTAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ibGFjayBtYi0xMCc+XG4gICAgICAgICB7Y3VycmVudFByb2plY3RJbmRleH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgbmV3IHRvZG8uLi5cIlxuICAgICAgICBjbGFzc05hbWU9J2gtMTAnXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi0zMDAgaG92ZXI6YmctZ3JlZW4tNDAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBcIiBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfT5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1yLTJcIj5BZGQgVG9kbzwvaDU+XG4gICAgICAgIDxJb0FkZENpcmNsZU91dGxpbmUgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdtdC0xMCc+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlVG9nZ2xlVG9kbyhpbmRleCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IHRvZG8uY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZScgfX0+e3RvZG8udGV4dH08L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtbC01IGJnLXJlZC0zMDAgaG92ZXI6YmctcmVkLTQwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUb2RvKGluZGV4KX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1kT3V0bGluZURlbGV0ZU91dGxpbmUiLCJJb0FkZENpcmNsZU91dGxpbmUiLCJUb2RvTGlzdCIsImN1cnJlbnRQcm9qZWN0SW5kZXgiLCJzZXRDdXJyZW50UHJvamVjdEluZGV4Iiwic3RvcmVkVG9kb0xpc3QiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkUHJvamVjdHMiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ0b2RvcyIsInNldFRvZG9zIiwic2F2ZWRQcm9qZWN0cyIsInNhdmVkVG9kb3MiLCJsZW5ndGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBZGRUb2RvIiwidHJpbSIsInRleHQiLCJjb21wbGV0ZWQiLCJoYW5kbGVEZWxldGVUb2RvIiwiaW5kZXgiLCJ1cGRhdGVkVG9kb3MiLCJzcGxpY2UiLCJoYW5kbGVUb2dnbGVUb2RvIiwiaGFuZGxlQWRkUHJvamVjdCIsInByb2plY3ROYW1lIiwicHJvbXB0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsInByb2plY3QiLCJyZW1vdmVJdGVtIiwidXBkYXRlZFByb2plY3RzIiwiZmlsdGVyIiwicHJvaiIsImhhbmRsZVByb2plY3RDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyIsIm1hcCIsImg1IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInVsIiwidG9kbyIsImxpIiwiY2hlY2tlZCIsInNwYW4iLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoList.tsx\n"));

/***/ })

});