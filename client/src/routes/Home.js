import React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  Container,
  Header,
  Title,
  Subtitle,
  Loading,
  Movies,
} from "../style/HomeStyle";
import Movie from "../components/Movie";

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
  return (
    <Container>
      <Header>
        <Title>Apollo 2021</Title>
        <Subtitle>I Love GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {data?.movies && (
        <Movies>
          {data.movies.map((m) => (
            <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
          ))}
        </Movies>
      )}
    </Container>
  );
};

export default Home;
