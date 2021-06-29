import styled from "styled-components";

export const Container = styled.div`
  height: 110vh;
  position: fixed;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export const Column = styled.div`
  margin-left: 10px;
  margin-top: 120px;
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

export const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 28px;
  margin-bottom: 30px;
`;

export const Poster = styled.div`
  width: 25%;
  height: 60%;
  margin-right: 10px;
  border-radius: 10px;
  border: 5px solid white;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;
export const Suggestion = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
