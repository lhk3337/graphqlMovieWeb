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
  Suggestion,
} from "../style/DetailStyle";
import { Movies } from "../style/HomeStyle";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      description_intro
      language
      rating
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;
const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <>
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
          <Subtitle>Recommand</Subtitle>
          <Suggestion>
            {data?.suggestions?.map((m) => (
              <Poster bg={m.medium_cover_image}></Poster>
            ))}
          </Suggestion>
        </Column>
        <Poster bg={data?.movie?.medium_cover_image}></Poster>
      </Container>
    </>
  );
};

export default Detail;
