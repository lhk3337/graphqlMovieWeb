import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql", //스키마
  resolvers,
});

server.start(() => console.log("Server is running on localhost:4000"));
