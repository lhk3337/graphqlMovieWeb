import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import {
  Container,
  Title,
  Subtitle,
  Description,
  Poster,
  Column,
} from "../style/DetailStyle";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      description_intro
      language
      rating
    }
  }
`;
const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  console.log(data?.movie?.medium_cover_image);
  return (
    <Container>
      <Column>
        <Title>{loading ? "loading" : data.movie.title}</Title>
        {data?.movie && (
          <>
            <Subtitle>
              {data.movie.language} · {data.movie.rating}
            </Subtitle>
            <Description>{data.movie.description_intro}</Description>
          </>
        )}
      </Column>
      <Poster bg={data?.movie.medium_cover_image}></Poster>
    </Container>
  );
};

export default Detail;
