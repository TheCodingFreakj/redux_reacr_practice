import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const OuterCovers = styled.section`
  display: flex;
`;
const OuterCover = styled.section`
  display: flex;
  background: black;
  width: 69rem;
  flex-wrap: wrap;
`;
const Wrapper = styled.section`
  background: yellow;
  width: 20rem;
  padding: 4rem;
  margin: 4%;
`;

const Title = styled.h1`
  color: red;
  font-size: 1.5em;
  text-align: center;
`;

const Sibebar = styled.section`
  color: red;
  background: violet;
  width: 17rem;
`;
const StyledComponents2 = () => {
  return (
    <>
      <OuterCovers>
        <OuterCover>
          <Wrapper>
            <Title>This is the title</Title>
          </Wrapper>

          <Wrapper>
            <Title>This is the title</Title>
          </Wrapper>

          <Wrapper>
            <Title>This is the title</Title>
          </Wrapper>

          <Wrapper>
            <Title>This is the title</Title>
          </Wrapper>

          <Wrapper>
            <Title>This is the title</Title>
          </Wrapper>
        </OuterCover>
        <Sibebar>This is the sidebar</Sibebar>
      </OuterCovers>
    </>
  );
};

export default StyledComponents2;
