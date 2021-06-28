import { getMovies, getMovie, getSuggestions } from "./db";
const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating), //목록 여러개
    movie: (_, { id }) => getMovie(id), //목록 하나기 떄문에 schema.graphql에 movie(id: Int!): Movie에서 Movie가 배열을 붙이지 않음
    suggestions: (_, { id }) => getSuggestions(id), //목록 여러개
  },
};
export default resolvers;
