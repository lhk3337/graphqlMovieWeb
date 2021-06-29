import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      title
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(data);
  if (loading) {
    return "loading...";
  }
  if (error) {
    return "error";
  }
  if (data && data.movies) {
    return data.movies.map((m) => <h1>{m.title}</h1>);
  }
};

export default Home;
