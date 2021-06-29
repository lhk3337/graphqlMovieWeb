import React from "react";
import { Container, Poster } from "../style/MovieStyle";
import { Link } from "react-router-dom";

const Movie = ({ id, bg }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      ;
    </Container>
  );
};

export default Movie;
