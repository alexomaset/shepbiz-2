"use strict";
(() => {
var exports = {};
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 6352:
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4462);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_server__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ 4462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { ApolloServer , gql  } = __webpack_require__(6352);
const knex = __webpack_require__(514)({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "alex",
        password: "hazard1234",
        database: "my_db"
    }
});
typeDefs = gql`{
type Blog {
 id: sc_01,
 title: Name,
 Content: Name
}
 type Query {
    blogs:[Blog]
    blog(id:ID!): Blog
 }

 type Mutation{
    createBlog(title: String!, content: String!): Blog
    updateBlog(id:ID!, title:String!, content:String!):Blog
    deleteBlog(id:ID!):Blog
 }
}`;
const resolvers = {
    Query: {
        blogs: ()=>knex.select().from("blogs"),
        blog: (_, { id  })=>knex.select.from("blogs").where({
                id
            }).first()
    },
    Mutation: {
        createBlog: (_, title, content)=>knex(blogs).insert({
                title,
                content
            }).returning("x"),
        updateBlog: (_, { id , title , content  })=>knex(blogs).update({
                id,
                title,
                content
            }).where({
                id
            }).returning("x"),
        deleteBlog: (_, { id  })=>knex(blogs).delete().where({
                id
            }).returning("x")
    }
};
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});
module.exports = apolloServer.createHandler({
    path: "/api/graphql"
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(330));
module.exports = __webpack_exports__;

})();