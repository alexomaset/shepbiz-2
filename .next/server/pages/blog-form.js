"use strict";
(() => {
var exports = {};
exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 2589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog_form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/blog-form.jsx



const BlogForm = ()=>{
    const { 0: title , 1: setTitle  } = (0,external_react_.useState)("");
    const { 0: content , 1: setContent  } = (0,external_react_.useState)("");
    const { 0: image , 1: setImage  } = (0,external_react_.useState)(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(title, content, image);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "jsx-e5753190d3ee304f",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-e5753190d3ee304f" + " " + "form-group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "jsx-e5753190d3ee304f" + " " + "form-label",
                        children: "Title:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "jsx-e5753190d3ee304f" + " " + "form-input"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-e5753190d3ee304f" + " " + "form-group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "jsx-e5753190d3ee304f" + " " + "form-label",
                        children: "Content:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        className: "jsx-e5753190d3ee304f" + " " + "form-input"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-e5753190d3ee304f" + " " + "form-group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "jsx-e5753190d3ee304f" + " " + "form-label",
                        children: "Image:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "file",
                        onChange: (e)=>setImage(e.target.files[0]),
                        className: "jsx-e5753190d3ee304f" + " " + "form-input"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "jsx-e5753190d3ee304f" + " " + "submit-button",
                children: "Submit"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "e5753190d3ee304f",
                children: ".form-group.jsx-e5753190d3ee304f{margin-bottom:20px}.form-label.jsx-e5753190d3ee304f{font-size:18px;font-weight:bold;margin-bottom:10px}.form-input.jsx-e5753190d3ee304f{padding:10px;font-size:16px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid#ccc;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.submit-button.jsx-e5753190d3ee304f{background-color:#4caf50;color:white;padding:12px 20px;border:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;cursor:pointer;float:right;font-size:16px}.submit-button.jsx-e5753190d3ee304f:hover{background-color:#45a049}"
            })
        ]
    });
};
/* harmony default export */ const blog_form = (BlogForm);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2589));
module.exports = __webpack_exports__;

})();