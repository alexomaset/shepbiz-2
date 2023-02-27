const { ApolloServer, gql } = require("apollo-server-micro");

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "alex",
    password: "hazard1234",
    database: "my_db",
  },
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
    blogs: () => knex.select().from("blogs"),
    blog: (_, { id }) => knex.select.from("blogs").where({ id }).first(),
  },

  Mutation: {
    createBlog: (_, title, content) =>
      knex(blogs).insert({ title, content }).returning("x"),
    updateBlog: (_, { id, title, content }) =>
      knex(blogs).update({ id, title, content }).where({ id }).returning("x"),
    deleteBlog: (_, { id }) =>
      knex(blogs).delete().where({ id }).returning("x"),
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

module.exports = apolloServer.createHandler({ path: "/api/graphql" });
