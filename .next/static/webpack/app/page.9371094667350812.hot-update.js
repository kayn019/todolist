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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineDeleteOutline!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoAddCircleOutline!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TodoList = ()=>{\n    _s();\n    const [currentProjectIndex, setCurrentProjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Home\");\n    const storedTodoList = JSON.parse(localStorage.getItem(\"todos-\".concat(currentProjectIndex)));\n    const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedProjects || []);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedTodoList || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProjects = localStorage.getItem(\"projects\");\n        if (savedProjects) {\n            setProjects(JSON.parse(savedProjects));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTodos = localStorage.getItem(\"todos-\".concat(currentProjectIndex));\n        if (savedTodos) {\n            setTodos(JSON.parse(savedTodos));\n        }\n    }, [\n        currentProjectIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (projects.length >= 0) {\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n    }, [\n        projects\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (todos.length >= 0) {\n            localStorage.setItem(\"todos-\".concat(currentProjectIndex), JSON.stringify(todos));\n        }\n    }, [\n        todos,\n        currentProjectIndex\n    ]);\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleAddTodo = ()=>{\n        if (inputValue.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                {\n                    text: inputValue,\n                    completed: false\n                }\n            ]);\n            setInputValue(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const updatedTodos = [\n            ...todos\n        ];\n        updatedTodos.splice(index, 1);\n        setTodos(updatedTodos);\n    };\n    const handleToggleTodo = (index)=>{\n        const updatedTodos = [\n            ...todos\n        ];\n        updatedTodos[index].completed = !updatedTodos[index].completed;\n        setTodos(updatedTodos);\n    };\n    const handleAddProject = ()=>{\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            setProjects([\n                ...projects,\n                projectName\n            ]);\n            setCurrentProjectIndex(projectName);\n            localStorage.setItem(\"todos-\".concat(projectName), JSON.stringify([]));\n        }\n    };\n    const handleDeleteProject = (project)=>{\n        localStorage.removeItem(\"todos-\".concat(project));\n        const updatedProjects = projects.filter((proj)=>proj !== project);\n        setProjects(updatedProjects);\n        if (currentProjectIndex === project) {\n            setCurrentProjectIndex(updatedProjects[0] || \"Home\");\n        }\n    };\n    const handleProjectChange = (index)=>{\n        setCurrentProjectIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black w-full sm:w-2/6 md:w-1/6 text-white p-5 shadow-2xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-black\",\n                        children: \"Todo list\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 text-xl \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"hover:bg-slate-300\",\n                            onClick: ()=>handleProjectChange(\"Home\"),\n                            children: \"Home\"\n                        }, 0, false, {\n                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl text-white mt-5 font-bold\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex justify-between \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"hover:bg-slate-300\",\n                                        onClick: ()=>handleProjectChange(project),\n                                        children: project\n                                    }, index, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteProject(project),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineDeleteOutline, {}, void 0, false, {\n                                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-5 mt-5\",\n                        onClick: handleAddProject,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mr-2\",\n                                children: \"Add Project\"\n                            }, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoAddCircleOutline, {}, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl font-black mb-10\",\n                        children: currentProjectIndex\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: inputValue,\n                        onChange: handleInputChange,\n                        placeholder: \"Add new todo...\",\n                        className: \"h-10\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center \",\n                        onClick: handleAddTodo,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"mr-2\",\n                                children: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoAddCircleOutline_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoAddCircleOutline, {}, void 0, false, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"mt-10\",\n                        children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        checked: todo.completed,\n                                        onChange: ()=>handleToggleTodo(index)\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            textDecoration: todo.completed ? \"line-through\" : \"none\"\n                                        },\n                                        children: todo.text\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"ml-5 bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center \",\n                                        onClick: ()=>handleDeleteTodo(index),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"eumdKU41sHGgDi3kYRUvWLo/pMo=\");\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QztBQUNZO0FBQ0g7QUFFckQsTUFBTUksV0FBVzs7SUFDYixNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9ELE1BQU1PLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsU0FBNkIsT0FBcEJOO0lBQ2hFLE1BQU1PLGlCQUFpQkosS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDdkQsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDWSxrQkFBa0IsRUFBRTtJQUM3RCxNQUFNLENBQUNHLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2lCLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDTyxrQkFBa0IsRUFBRTtJQUV2RE4sZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsZ0JBQWdCVCxhQUFhQyxPQUFPLENBQUM7UUFDM0MsSUFBSVEsZUFBZTtZQUNqQkwsWUFBWU4sS0FBS0MsS0FBSyxDQUFDVTtRQUN6QjtJQUNGLEdBQUcsRUFBRTtJQUVMbEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsYUFBYVYsYUFBYUMsT0FBTyxDQUFDLFNBQTZCLE9BQXBCTjtRQUNqRCxJQUFJZSxZQUFZO1lBQ2RGLFNBQVNWLEtBQUtDLEtBQUssQ0FBQ1c7UUFDdEI7SUFDRixHQUFHO1FBQUNmO0tBQW9CO0lBRXhCSixnREFBU0EsQ0FBQztRQUNSLElBQUlZLFNBQVNRLE1BQU0sSUFBSSxHQUFHO1lBQ3hCWCxhQUFhWSxPQUFPLENBQUMsWUFBWWQsS0FBS2UsU0FBUyxDQUFDVjtRQUNsRDtJQUNGLEdBQUc7UUFBQ0E7S0FBUztJQUViWixnREFBU0EsQ0FBQztRQUNSLElBQUlnQixNQUFNSSxNQUFNLElBQUksR0FBRztZ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QU87Ozs7OzswQ0FDckIsOERBQUM3Qyx5R0FBa0JBOzs7Ozs7Ozs7OztrQ0FFckIsOERBQUN3RDt3QkFBR1gsV0FBVTtrQ0FDWC9CLE1BQU1vQyxHQUFHLENBQUMsQ0FBQ08sTUFBTTNCLHNCQUNoQiw4REFBQzRCOztrREFDQyw4REFBQ047d0NBQ0NDLE1BQUs7d0NBQ0xNLFNBQVNGLEtBQUs3QixTQUFTO3dDQUN2QjBCLFVBQVUsSUFBTXJCLGlCQUFpQkg7Ozs7OztrREFFbkMsOERBQUM4Qjt3Q0FBS0MsT0FBTzs0Q0FBRUMsZ0JBQWdCTCxLQUFLN0IsU0FBUyxHQUFHLGlCQUFpQjt3Q0FBTztrREFBSTZCLEtBQUs5QixJQUFJOzs7Ozs7a0RBRXJGLDhEQUFDb0I7d0NBQU9GLFdBQVU7d0NBQXVHRyxTQUFTLElBQU1uQixpQkFBaUJDO2tEQUFROzs7Ozs7OytCQVIxSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbkI7R0E5SU03QjtLQUFBQTtBQWdKTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/NTdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHRvZG8gfSBmcm9tICdub2RlOnRlc3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1kT3V0bGluZURlbGV0ZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7IElvQWRkQ2lyY2xlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuY29uc3QgVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRQcm9qZWN0SW5kZXgsIHNldEN1cnJlbnRQcm9qZWN0SW5kZXhdID0gdXNlU3RhdGUoJ0hvbWUnKTtcbiAgICBjb25zdCBzdG9yZWRUb2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG9zLSR7Y3VycmVudFByb2plY3RJbmRleH1gKSk7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoc3RvcmVkUHJvamVjdHMgfHwgW10pO1xuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKHN0b3JlZFRvZG9MaXN0IHx8IFtdKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNhdmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICAgIHNldFByb2plY3RzKEpTT04ucGFyc2Uoc2F2ZWRQcm9qZWN0cykpO1xuICAgICAgfVxuICAgIH0sIFtdKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNhdmVkVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdG9kb3MtJHtjdXJyZW50UHJvamVjdEluZGV4fWApO1xuICAgICAgaWYgKHNhdmVkVG9kb3MpIHtcbiAgICAgICAgc2V0VG9kb3MoSlNPTi5wYXJzZShzYXZlZFRvZG9zKSk7XG4gICAgICB9XG4gICAgfSwgW2N1cnJlbnRQcm9qZWN0SW5kZXhdKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPj0gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgfVxuICAgIH0sIFtwcm9qZWN0c10pO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHRvZG9zLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2Rvcy0ke2N1cnJlbnRQcm9qZWN0SW5kZXh9YCwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICAgIH1cbiAgICB9LCBbdG9kb3MsIGN1cnJlbnRQcm9qZWN0SW5kZXhdKTtcbiAgXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgaGFuZGxlQWRkVG9kbyA9ICgpID0+IHtcbiAgICAgIGlmIChpbnB1dFZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCB7IHRleHQ6IGlucHV0VmFsdWUsIGNvbXBsZXRlZDogZmFsc2UgfV0pO1xuICAgICAgICBzZXRJbnB1dFZhbHVlKCcnKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBjb25zdCBoYW5kbGVEZWxldGVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSBbLi4udG9kb3NdO1xuICAgICAgdXBkYXRlZFRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xuICAgIH07XG4gIFxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IFsuLi50b2Rvc107XG4gICAgICB1cGRhdGVkVG9kb3NbaW5kZXhdLmNvbXBsZXRlZCA9ICF1cGRhdGVkVG9kb3NbaW5kZXhdLmNvbXBsZXRlZDtcbiAgICAgIHNldFRvZG9zKHVwZGF0ZWRUb2Rvcyk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgaGFuZGxlQWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvbXB0KCdFbnRlciBwcm9qZWN0IG5hbWU6Jyk7XG4gICAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgc2V0UHJvamVjdHMoWy4uLnByb2plY3RzLCBwcm9qZWN0TmFtZV0pO1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KHByb2plY3ROYW1lKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9zLSR7cHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBjb25zdCBoYW5kbGVEZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGB0b2Rvcy0ke3Byb2plY3R9YCk7XG4gICAgICBjb25zdCB1cGRhdGVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIocHJvaiA9PiBwcm9qICE9PSBwcm9qZWN0KTtcbiAgICAgIHNldFByb2plY3RzKHVwZGF0ZWRQcm9qZWN0cyk7XG4gICAgICBpZiAoY3VycmVudFByb2plY3RJbmRleCA9PT0gcHJvamVjdCkge1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KHVwZGF0ZWRQcm9qZWN0c1swXSB8fCAnSG9tZScpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIGNvbnN0IGhhbmRsZVByb2plY3RDaGFuZ2UgPSAoaW5kZXgpID0+IHtcbiAgICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgoaW5kZXgpO1xuICAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLXNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayB3LWZ1bGwgc206dy0yLzYgbWQ6dy0xLzYgdGV4dC13aGl0ZSBwLTUgc2hhZG93LTJ4bFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ibGFja1wiPlRvZG8gbGlzdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC14bCBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17MH0gY2xhc3NOYW1lPSdob3ZlcjpiZy1zbGF0ZS0zMDAnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RDaGFuZ2UoXCJIb21lXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSBtdC01IGZvbnQtYm9sZFwiPlByb2plY3RzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1iZXR3ZWVuIFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdob3ZlcjpiZy1zbGF0ZS0zMDAnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RDaGFuZ2UocHJvamVjdCl9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QpfT5cbiAgICAgICAgICAgICAgICAgICAgPE1kT3V0bGluZURlbGV0ZU91dGxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTMwMCBob3ZlcjpiZy1ncmVlbi00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIG1sLTUgbXQtNVwiIG9uQ2xpY2s9e2hhbmRsZUFkZFByb2plY3R9PlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0nbXItMic+QWRkIFByb2plY3Q8L2g1PlxuICAgICAgICAgICAgPElvQWRkQ2lyY2xlT3V0bGluZSAvPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYmxhY2sgbWItMTAnPlxuICAgICAgICAge2N1cnJlbnRQcm9qZWN0SW5kZXh9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIG5ldyB0b2RvLi4uXCJcbiAgICAgICAgY2xhc3NOYW1lPSdoLTEwJ1xuICAgICAgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tMzAwIGhvdmVyOmJnLWdyZWVuLTQwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgXCIgb25DbGljaz17aGFuZGxlQWRkVG9kb30+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtci0yXCI+QWRkIFRvZG88L2g1PlxuICAgICAgICA8SW9BZGRDaXJjbGVPdXRsaW5lIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPHVsIGNsYXNzTmFtZT0nbXQtMTAnPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0b2RvLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZVRvZ2dsZVRvZG8oaW5kZXgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiB0b2RvLmNvbXBsZXRlZCA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnIH19Pnt0b2RvLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWwtNSBiZy1yZWQtMzAwIGhvdmVyOmJnLXJlZC00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyICcgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlVG9kbyhpbmRleCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNZE91dGxpbmVEZWxldGVPdXRsaW5lIiwiSW9BZGRDaXJjbGVPdXRsaW5lIiwiVG9kb0xpc3QiLCJjdXJyZW50UHJvamVjdEluZGV4Iiwic2V0Q3VycmVudFByb2plY3RJbmRleCIsInN0b3JlZFRvZG9MaXN0IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZFByb2plY3RzIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwidG9kb3MiLCJzZXRUb2RvcyIsInNhdmVkUHJvamVjdHMiLCJzYXZlZFRvZG9zIiwibGVuZ3RoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQWRkVG9kbyIsInRyaW0iLCJ0ZXh0IiwiY29tcGxldGVkIiwiaGFuZGxlRGVsZXRlVG9kbyIsImluZGV4IiwidXBkYXRlZFRvZG9zIiwic3BsaWNlIiwiaGFuZGxlVG9nZ2xlVG9kbyIsImhhbmRsZUFkZFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb21wdCIsImhhbmRsZURlbGV0ZVByb2plY3QiLCJwcm9qZWN0IiwicmVtb3ZlSXRlbSIsInVwZGF0ZWRQcm9qZWN0cyIsImZpbHRlciIsInByb2oiLCJoYW5kbGVQcm9qZWN0Q2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiLCJtYXAiLCJoNSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ1bCIsInRvZG8iLCJsaSIsImNoZWNrZWQiLCJzcGFuIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoList.tsx\n"));

/***/ })

});