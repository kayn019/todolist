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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineDeleteOutline!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst Projects = ()=>{\n    _s();\n    const [currentProjectIndex, setCurrentProjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedProjects || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProjects = localStorage.getItem(\"projects\");\n        if (savedProjects) {\n            setProjects(JSON.parse(savedProjects));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (projects.length >= 0) {\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n    }, [\n        projects\n    ]);\n    const handleAddProject = ()=>{\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            setProjects([\n                ...projects,\n                projectName\n            ]);\n        }\n        setCurrentProjectIndex(projectName);\n        localStorage.setItem(\"todos-\".concat(projectName), JSON.stringify([]));\n    };\n    const handleDeleteProject = (project)=>{\n        setCurrentProjectIndex(project);\n        localStorage.setItem(\"todos-\".concat(project), JSON.stringify([]));\n        const updatedProjects = [\n            ...projects\n        ];\n        const indexA = updatedProjects.indexOf(project);\n        updatedProjects.splice(indexA, 1);\n        setProjects(updatedProjects);\n    };\n    const handleProjectChange = (index)=>{\n        setCurrentProjectIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddProject,\n                children: \"Add Project\"\n            }, void 0, false, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleProjectChange(project),\n                            children: project\n                        }, index, false, {\n                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleDeleteProject(project),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"FCyberacSnVufxOIH80E6JEVIiQ=\");\n_c = Projects;\nconst TodoList = ()=>{\n    _s1();\n    const [currentProjectIndex, setCurrentProjectIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const storedTodoList = JSON.parse(localStorage.getItem(\"todos-\".concat(currentProjectIndex)));\n    const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedProjects || []);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(storedTodoList || []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedProjects = localStorage.getItem(\"projects\");\n        if (savedProjects) {\n            setProjects(JSON.parse(savedProjects));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedTodos = localStorage.getItem(\"todos-\".concat(currentProjectIndex));\n        if (savedTodos) {\n            setTodos(JSON.parse(savedTodos));\n        }\n    }, [\n        currentProjectIndex\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (projects.length >= 0) {\n            localStorage.setItem(\"projects\", JSON.stringify(projects));\n        }\n    }, [\n        projects\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (todos.length >= 0) {\n            localStorage.setItem(\"todos-\".concat(currentProjectIndex), JSON.stringify(todos));\n        }\n    }, [\n        todos,\n        currentProjectIndex\n    ]);\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleAddTodo = ()=>{\n        if (inputValue.trim() !== \"\") {\n            setTodos([\n                ...todos,\n                inputValue\n            ]);\n            setInputValue(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        const updatedTodos = [\n            ...todos\n        ];\n        updatedTodos.splice(index, 1);\n        setTodos(updatedTodos);\n    };\n    const handleAddProject = ()=>{\n        const projectName = prompt(\"Enter project name:\");\n        if (projectName) {\n            setProjects([\n                ...projects,\n                projectName\n            ]);\n        }\n        setCurrentProjectIndex(projectName);\n        localStorage.setItem(\"todos-\".concat(projectName), JSON.stringify([]));\n    };\n    const handleDeleteProject = (project)=>{\n        setCurrentProjectIndex(project);\n        localStorage.setItem(\"todos-\".concat(project), JSON.stringify([]));\n        const updatedProjects = [\n            ...projects\n        ];\n        const indexA = updatedProjects.indexOf(project);\n        updatedProjects.splice(indexA, 1);\n        setProjects(updatedProjects);\n    };\n    const handleProjectChange = (index)=>{\n        setCurrentProjectIndex(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black md:w-1/6 text-white p-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl\",\n                        children: \"Todo list\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl text-white mt-10\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between \",\n                        children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"hover:bg-slate-300\",\n                                        onClick: ()=>handleProjectChange(project),\n                                        children: project\n                                    }, index, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 171,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteProject(project),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdOutlineDeleteOutline, {}, void 0, false, {\n                                            fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                            lineNumber: 175,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 174,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 167,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAddProject,\n                        children: \"Add Project\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 181,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-10\",\n                children: [\n                    \"Content\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: inputValue,\n                        onChange: handleInputChange,\n                        placeholder: \"Add new todo...\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 186,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAddTodo,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 192,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    todo,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteTodo(index),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                        lineNumber: 197,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                                lineNumber: 195,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                        lineNumber: 193,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/xubuntuy/repos/todolist/app/components/TodoList.tsx\",\n        lineNumber: 163,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(TodoList, \"xc6ByXFvRpkd4DYCQ3B+Mj3DKSQ=\");\n_c1 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c, _c1;\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c1, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTRDO0FBQ1k7QUFJeEQsTUFBTUcsV0FBVzs7SUFDYixNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRS9ELE1BQU1NLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDekQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDTSxrQkFBa0IsRUFBRTtJQUs3REwsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxnQkFBZ0JKLGFBQWFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJRyxlQUFlO1lBQ2pCRCxZQUFZTCxLQUFLQyxLQUFLLENBQUNLO1FBQ3pCO0lBQ0YsR0FBRyxFQUFFO0lBRUxaLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVUsU0FBU0csTUFBTSxJQUFJLEdBQUc7WUFDdEJMLGFBQWFNLE9BQU8sQ0FBQyxZQUFZUixLQUFLUyxTQUFTLENBQUNMO1FBQ3BEO0lBRUYsR0FBRztRQUFDQTtLQUFTO0lBRWIsTUFBTU0sbUJBQW1CO1FBQ3ZCLE1BQU1DLGNBQWNDLE9BQU87UUFDM0IsSUFBSUQsYUFBYTtZQUNmTixZQUFZO21CQUFJRDtnQkFBVU87YUFBWTtRQUN4QztRQUNBYix1QkFBdUJhO1FBQ3ZCVCxhQUFhTSxPQUFPLENBQUMsU0FBcUIsT0FBWkcsY0FBZVgsS0FBS1MsU0FBUyxDQUFDLEVBQUU7SUFFaEU7SUFFQSxNQUFNSSxzQkFBc0IsQ0FBQ0M7UUFDM0JoQix1QkFBdUJnQjtRQUV2QlosYUFBYU0sT0FBTyxDQUFDLFNBQWlCLE9BQVJNLFVBQVdkLEtBQUtTLFNBQVMsQ0FBQyxFQUFFO1FBRzFELE1BQU1NLGtCQUFrQjtlQUFJWDtTQUFTO1FBQ3JDLE1BQU1ZLFNBQVNELGdCQUFnQkUsT0FBTyxDQUFDSDtRQUN2Q0MsZ0JBQWdCRyxNQUFNLENBQUNGLFFB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cC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD81N2IzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdG9kbyB9IGZyb20gJ25vZGU6dGVzdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWRPdXRsaW5lRGVsZXRlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuXG5cblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRQcm9qZWN0SW5kZXgsIHNldEN1cnJlbnRQcm9qZWN0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoc3RvcmVkUHJvamVjdHMgfHwgW10pO1xuXG4gIFxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgaWYgKHNhdmVkUHJvamVjdHMpIHtcbiAgICAgIHNldFByb2plY3RzKEpTT04ucGFyc2Uoc2F2ZWRQcm9qZWN0cykpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICAgIFxuICB9LCBbcHJvamVjdHNdKTtcblxuICBjb25zdCBoYW5kbGVBZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvbXB0KCdFbnRlciBwcm9qZWN0IG5hbWU6Jyk7XG4gICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICBzZXRQcm9qZWN0cyhbLi4ucHJvamVjdHMsIHByb2plY3ROYW1lXSk7XG4gICAgfVxuICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgocHJvamVjdE5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2Rvcy0ke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KHByb2plY3QpO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2Rvcy0ke3Byb2plY3R9YCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuICAgIFxuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IFsuLi5wcm9qZWN0c107XG4gICAgY29uc3QgaW5kZXhBID0gdXBkYXRlZFByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgdXBkYXRlZFByb2plY3RzLnNwbGljZShpbmRleEEsIDEpO1xuICAgIHNldFByb2plY3RzKHVwZGF0ZWRQcm9qZWN0cyk7XG5cbiAgICBcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcm9qZWN0Q2hhbmdlID0gKGluZGV4KSA9PiB7XG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgXG4gICAgICBcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRQcm9qZWN0fT5BZGQgUHJvamVjdDwvYnV0dG9uPlxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcm9qZWN0Q2hhbmdlKHByb2plY3QpfT5cbiAgICAgICAgICAgIHtwcm9qZWN0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSl9XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuY29uc3QgVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRQcm9qZWN0SW5kZXgsIHNldEN1cnJlbnRQcm9qZWN0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3Qgc3RvcmVkVG9kb0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2Rvcy0ke2N1cnJlbnRQcm9qZWN0SW5kZXh9YCkpO1xuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShzdG9yZWRQcm9qZWN0cyB8fCBbXSk7XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKHN0b3JlZFRvZG9MaXN0IHx8IFtdKTtcblxuICBcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xuICAgIGlmIChzYXZlZFByb2plY3RzKSB7XG4gICAgICBzZXRQcm9qZWN0cyhKU09OLnBhcnNlKHNhdmVkUHJvamVjdHMpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdG9kb3MtJHtjdXJyZW50UHJvamVjdEluZGV4fWApO1xuICAgIGlmIChzYXZlZFRvZG9zKSB7XG4gICAgICBzZXRUb2RvcyhKU09OLnBhcnNlKHNhdmVkVG9kb3MpKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50UHJvamVjdEluZGV4XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID49IDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG4gICAgXG4gIH0sIFtwcm9qZWN0c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2Rvcy0ke2N1cnJlbnRQcm9qZWN0SW5kZXh9YCwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICB9XG4gICAgXG4gIH0sIFt0b2RvcywgY3VycmVudFByb2plY3RJbmRleF0pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gKCkgPT4ge1xuICAgIGlmIChpbnB1dFZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgaW5wdXRWYWx1ZV0pO1xuICAgICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSBbLi4udG9kb3NdO1xuICAgIHVwZGF0ZWRUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldFRvZG9zKHVwZGF0ZWRUb2Rvcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdCgnRW50ZXIgcHJvamVjdCBuYW1lOicpO1xuICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgc2V0UHJvamVjdHMoWy4uLnByb2plY3RzLCBwcm9qZWN0TmFtZV0pO1xuICAgIH1cbiAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KHByb2plY3ROYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb3MtJHtwcm9qZWN0TmFtZX1gLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChwcm9qZWN0KTtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb3MtJHtwcm9qZWN0fWAsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5cbiAgICBcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdHMgPSBbLi4ucHJvamVjdHNdO1xuICAgIGNvbnN0IGluZGV4QSA9IHVwZGF0ZWRQcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgIHVwZGF0ZWRQcm9qZWN0cy5zcGxpY2UoaW5kZXhBLCAxKTtcbiAgICBzZXRQcm9qZWN0cyh1cGRhdGVkUHJvamVjdHMpO1xuXG4gICAgXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJvamVjdENoYW5nZSA9IChpbmRleCkgPT4ge1xuICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgbWQ6dy0xLzYgdGV4dC13aGl0ZSBwLTUgXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPlRvZG8gbGlzdDwvaDE+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXdoaXRlIG10LTEwXCI+UHJvamVjdHM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImhvdmVyOmJnLXNsYXRlLTMwMFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByb2plY3RDaGFuZ2UocHJvamVjdCl9PlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QpfT5cbiAgICAgICAgICAgICAgICA8TWRPdXRsaW5lRGVsZXRlT3V0bGluZSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRQcm9qZWN0fT5BZGQgUHJvamVjdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEwJz5Db250ZW50XG4gICAgICAgIFxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgbmV3IHRvZG8uLi5cIlxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkVG9kb30+QWRkIFRvZG88L2J1dHRvbj5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7dG9kb31cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlVG9kbyhpbmRleCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNZE91dGxpbmVEZWxldGVPdXRsaW5lIiwiUHJvamVjdHMiLCJjdXJyZW50UHJvamVjdEluZGV4Iiwic2V0Q3VycmVudFByb2plY3RJbmRleCIsInN0b3JlZFByb2plY3RzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJzYXZlZFByb2plY3RzIiwibGVuZ3RoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUFkZFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb21wdCIsImhhbmRsZURlbGV0ZVByb2plY3QiLCJwcm9qZWN0IiwidXBkYXRlZFByb2plY3RzIiwiaW5kZXhBIiwiaW5kZXhPZiIsInNwbGljZSIsImhhbmRsZVByb2plY3RDaGFuZ2UiLCJpbmRleCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJUb2RvTGlzdCIsInN0b3JlZFRvZG9MaXN0IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ0b2RvcyIsInNldFRvZG9zIiwic2F2ZWRUb2RvcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQWRkVG9kbyIsInRyaW0iLCJoYW5kbGVEZWxldGVUb2RvIiwidXBkYXRlZFRvZG9zIiwiY2xhc3NOYW1lIiwiaDEiLCJoMyIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ1bCIsInRvZG8iLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoList.tsx\n"));

/***/ })

});