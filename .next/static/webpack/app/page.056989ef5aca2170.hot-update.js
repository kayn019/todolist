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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineDeleteOutline!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Projects = ()=>{\n    _s();\n    const [currentProjectIndex, setCurrentProjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedProjects || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProjects = localStorage.getItem(\"projects\");\n        if (savedProjects) {\n            setProjects(JSON.parse(savedProjects));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (projects.length >= 0) {\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n    }, [\n        projects\n    ]);\n    const handleAddProject = ()=>{\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            setProjects([\n                ...projects,\n                projectName\n            ]);\n        }\n        setCurrentProjectIndex(projectName);\n        localStorage.setItem(\"todos-\".concat(projectName), JSON.stringify([]));\n    };\n    const handleDeleteProject = (project)=>{\n        setCurrentProjectIndex(project);\n        localStorage.setItem(\"todos-\".concat(project), JSON.stringify([]));\n        const updatedProjects = [\n            ...projects\n        ];\n        const indexA = updatedProjects.indexOf(project);\n        updatedProjects.splice(indexA, 1);\n        setProjects(updatedProjects);\n    };\n    const handleProjectChange = (index)=>{\n        setCurrentProjectIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddProject,\n                children: \"Add Project\"\n            }, void 0, false, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleProjectChange(project),\n                            children: project\n                        }, index, false, {\n                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleDeleteProject(project),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"FCyberacSnVufxOIH80E6JEVIiQ=\");\n_c = Projects;\nconst TodoList = ()=>{\n    _s1();\n    const [currentProjectIndex, setCurrentProjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const storedTodoList = JSON.parse(localStorage.getItem(\"todos-\".concat(currentProjectIndex)));\n    const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedProjects || []);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedTodoList || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProjects = localStorage.getItem(\"projects\");\n        if (savedProjects) {\n            setProjects(JSON.parse(savedProjects));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTodos = localStorage.getItem(\"todos-\".concat(currentProjectIndex));\n        if (savedTodos) {\n            setTodos(JSON.parse(savedTodos));\n        }\n    }, [\n        currentProjectIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (projects.length >= 0) {\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n    }, [\n        projects\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (todos.length >= 0) {\n            localStorage.setItem(\"todos-\".concat(currentProjectIndex), JSON.stringify(todos));\n        }\n    }, [\n        todos,\n        currentProjectIndex\n    ]);\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleAddTodo = ()=>{\n        if (inputValue.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                inputValue\n            ]);\n            setInputValue(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const updatedTodos = [\n            ...todos\n        ];\n        updatedTodos.splice(index, 1);\n        setTodos(updatedTodos);\n    };\n    const handleAddProject = ()=>{\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            setProjects([\n                ...projects,\n                projectName\n            ]);\n        }\n        setCurrentProjectIndex(projectName);\n        localStorage.setItem(\"todos-\".concat(projectName), JSON.stringify([]));\n    };\n    const handleDeleteProject = (project)=>{\n        setCurrentProjectIndex(project);\n        localStorage.setItem(\"todos-\".concat(project), JSON.stringify([]));\n        const updatedProjects = [\n            ...projects\n        ];\n        const indexA = updatedProjects.indexOf(project);\n        updatedProjects.splice(indexA, 1);\n        setProjects(updatedProjects);\n    };\n    const handleProjectChange = (index)=>{\n        setCurrentProjectIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black md:w-1/6 text-white p-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl\",\n                        children: \"Todo list\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl text-white mt-10\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex justify-between \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"hover:bg-slate-300\",\n                                        onClick: ()=>handleProjectChange(project),\n                                        children: project\n                                    }, index, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 171,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteProject(project),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineDeleteOutline, {}, void 0, false, {\n                                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                            lineNumber: 175,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 174,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 170,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 167,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAddProject,\n                        children: \"Add Project\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 181,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-10\",\n                children: [\n                    \"Content\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: inputValue,\n                        onChange: handleInputChange,\n                        placeholder: \"Add new todo...\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 186,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAddTodo,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 192,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    todo,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteTodo(index),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 197,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 195,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 193,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n        lineNumber: 163,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(TodoList, \"xc6ByXFvRpkd4DYCQ3B+Mj3DKSQ=\");\n_c1 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c, _c1;\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c1, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTRDO0FBQ1k7QUFJeEQsTUFBTUcsV0FBVzs7SUFDYixNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRS9ELE1BQU1NLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDekQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDTSxrQkFBa0IsRUFBRTtJQUs3REwsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxnQkFBZ0JKLGFBQWFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJRyxlQUFlO1lBQ2pCRCxZQUFZTCxLQUFLQyxLQUFLLENBQUNLO1FBQ3pCO0lBQ0YsR0FBRyxFQUFFO0lBRUxaLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVUsU0FBU0csTUFBTSxJQUFJLEdBQUc7WUFDdEJMLGFBQWFNLE9BQU8sQ0FBQyxZQUFZUixLQUFLUyxTQUFTLENBQUNMO1FBQ3BEO0lBRUYsR0FBRztRQUFDQTtLQUFTO0lBRWIsTUFBTU0sbUJBQW1CO1FBQ3ZCLE1BQU1DLGNBQWNDLE9BQU87UUFDM0IsSUFBSUQsYUFBYTtZQUNmTixZQUFZO21CQUFJRDtnQkFBVU87YUFBWTtRQUN4QztRQUNBYix1QkFBdUJhO1FBQ3ZCVCxhQUFhTSxPQUFPLENBQUMsU0FBcUIsT0FBWkcsY0FBZVgsS0FBS1MsU0FBUyxDQUFDLEVBQUU7SUFFaEU7SUFFQSxNQUFNSSxzQkFBc0IsQ0FBQ0M7UUFDM0JoQix1QkFBdUJnQjtRQUV2QlosYUFBYU0sT0FBTyxDQUFDLFNBQWlCLE9BQVJNLFVBQVdkLEtBQUtTLFNBQVMsQ0FBQyxFQUFFO1FBRzFELE1BQU1NLGtCQUFrQjtlQUFJWDtTQUFTO1FBQ3JDLE1BQU1ZLFNBQVNELGdCQUFnQkUsT0FBTyxDQUFDSDtRQUN2Q0MsZ0JBQWdCRyxNQUFNLENBQUNGLFFB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ZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/NTdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHRvZG8gfSBmcm9tICdub2RlOnRlc3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1kT3V0bGluZURlbGV0ZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcblxuXG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50UHJvamVjdEluZGV4LCBzZXRDdXJyZW50UHJvamVjdEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKHN0b3JlZFByb2plY3RzIHx8IFtdKTtcblxuICBcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xuICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICBzZXRQcm9qZWN0cyhKU09OLnBhcnNlKHNhdmVkUHJvamVjdHMpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPj0gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgICBcbiAgfSwgW3Byb2plY3RzXSk7XG5cbiAgY29uc3QgaGFuZGxlQWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdCgnRW50ZXIgcHJvamVjdCBuYW1lOicpO1xuICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgc2V0UHJvamVjdHMoWy4uLnByb2plY3RzLCBwcm9qZWN0TmFtZV0pO1xuICAgIH1cbiAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KHByb2plY3ROYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb3MtJHtwcm9qZWN0TmFtZX1gLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChwcm9qZWN0KTtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb3MtJHtwcm9qZWN0fWAsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5cbiAgICBcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdHMgPSBbLi4ucHJvamVjdHNdO1xuICAgIGNvbnN0IGluZGV4QSA9IHVwZGF0ZWRQcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgIHVwZGF0ZWRQcm9qZWN0cy5zcGxpY2UoaW5kZXhBLCAxKTtcbiAgICBzZXRQcm9qZWN0cyh1cGRhdGVkUHJvamVjdHMpO1xuXG4gICAgXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJvamVjdENoYW5nZSA9IChpbmRleCkgPT4ge1xuICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFxuICAgICAgXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkUHJvamVjdH0+QWRkIFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlUHJvamVjdENoYW5nZShwcm9qZWN0KX0+XG4gICAgICAgICAgICB7cHJvamVjdH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlUHJvamVjdChwcm9qZWN0KX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkpfVxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmNvbnN0IFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50UHJvamVjdEluZGV4LCBzZXRDdXJyZW50UHJvamVjdEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IHN0b3JlZFRvZG9MaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdG9kb3MtJHtjdXJyZW50UHJvamVjdEluZGV4fWApKTtcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoc3RvcmVkUHJvamVjdHMgfHwgW10pO1xuXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShzdG9yZWRUb2RvTGlzdCB8fCBbXSk7XG5cbiAgXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICBpZiAoc2F2ZWRQcm9qZWN0cykge1xuICAgICAgc2V0UHJvamVjdHMoSlNPTi5wYXJzZShzYXZlZFByb2plY3RzKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZFRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG9zLSR7Y3VycmVudFByb2plY3RJbmRleH1gKTtcbiAgICBpZiAoc2F2ZWRUb2Rvcykge1xuICAgICAgc2V0VG9kb3MoSlNPTi5wYXJzZShzYXZlZFRvZG9zKSk7XG4gICAgfVxuICB9LCBbY3VycmVudFByb2plY3RJbmRleF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICAgIFxuICB9LCBbcHJvamVjdHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPj0gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb3MtJHtjdXJyZW50UHJvamVjdEluZGV4fWAsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfVxuICAgIFxuICB9LCBbdG9kb3MsIGN1cnJlbnRQcm9qZWN0SW5kZXhdKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXRWYWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIGlucHV0VmFsdWVdKTtcbiAgICAgIHNldElucHV0VmFsdWUoJycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFRvZG9zID0gWy4uLnRvZG9zXTtcbiAgICB1cGRhdGVkVG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoJ0VudGVyIHByb2plY3QgbmFtZTonKTtcbiAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgIHNldFByb2plY3RzKFsuLi5wcm9qZWN0cywgcHJvamVjdE5hbWVdKTtcbiAgICB9XG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChwcm9qZWN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9zLSR7cHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgocHJvamVjdCk7XG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9zLSR7cHJvamVjdH1gLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuXG4gICAgXG4gICAgY29uc3QgdXBkYXRlZFByb2plY3RzID0gWy4uLnByb2plY3RzXTtcbiAgICBjb25zdCBpbmRleEEgPSB1cGRhdGVkUHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICB1cGRhdGVkUHJvamVjdHMuc3BsaWNlKGluZGV4QSwgMSk7XG4gICAgc2V0UHJvamVjdHModXBkYXRlZFByb2plY3RzKTtcblxuICAgIFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByb2plY3RDaGFuZ2UgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIG1kOnctMS82IHRleHQtd2hpdGUgcC01IFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGxcIj5Ub2RvIGxpc3Q8L2gxPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSBtdC0xMFwiPlByb2plY3RzPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1iZXR3ZWVuIFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdob3ZlcjpiZy1zbGF0ZS0zMDAnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RDaGFuZ2UocHJvamVjdCl9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QpfT5cbiAgICAgICAgICAgICAgICAgICAgPE1kT3V0bGluZURlbGV0ZU91dGxpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFByb2plY3R9PkFkZCBQcm9qZWN0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMTAnPkNvbnRlbnRcbiAgICAgICAgXG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBuZXcgdG9kby4uLlwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfT5BZGQgVG9kbzwvYnV0dG9uPlxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUb2RvKGluZGV4KX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1kT3V0bGluZURlbGV0ZU91dGxpbmUiLCJQcm9qZWN0cyIsImN1cnJlbnRQcm9qZWN0SW5kZXgiLCJzZXRDdXJyZW50UHJvamVjdEluZGV4Iiwic3RvcmVkUHJvamVjdHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInNhdmVkUHJvamVjdHMiLCJsZW5ndGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlQWRkUHJvamVjdCIsInByb2plY3ROYW1lIiwicHJvbXB0IiwiaGFuZGxlRGVsZXRlUHJvamVjdCIsInByb2plY3QiLCJ1cGRhdGVkUHJvamVjdHMiLCJpbmRleEEiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFuZGxlUHJvamVjdENoYW5nZSIsImluZGV4IiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIlRvZG9MaXN0Iiwic3RvcmVkVG9kb0xpc3QiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInRvZG9zIiwic2V0VG9kb3MiLCJzYXZlZFRvZG9zIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBZGRUb2RvIiwidHJpbSIsImhhbmRsZURlbGV0ZVRvZG8iLCJ1cGRhdGVkVG9kb3MiLCJjbGFzc05hbWUiLCJoMSIsImgzIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInVsIiwidG9kbyIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoList.tsx\n"));

/***/ })

});