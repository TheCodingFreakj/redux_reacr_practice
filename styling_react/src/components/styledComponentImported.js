import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: teal;
  width: 20rem;
  margin: 3%;
`;

const OuterCover = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: black;
  width: 69rem;
`;

const SideBar = styled.section`
  background: red;
  width: 20rem;
`;

const ExternalCover = styled.section`
  display: flex;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid violet;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  -webkit-text-decoration: none;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  color: snow;
  background: turquoise;
  padding: 4%;
`;
const StyledComponents = () => {
  return (
    <>
      <ExternalCover>
        <OuterCover>
          <Wrapper>
            <Title>This is the title</Title>
            <Button>Normal</Button>
            <Button primary>Normal</Button>
          </Wrapper>

          <Wrapper>
            <Title>This is the title</Title>
            <TomatoButton as="a" href="#">
              Link with Tomato Button styles
            </TomatoButton>
          </Wrapper>
          <Wrapper>
            <Title>This is the title</Title>
            <NavUnlisted>
              <StyledLink to="/">Link1</StyledLink>
              <StyledLink to="/about">Link2</StyledLink>
            </NavUnlisted>
          </Wrapper>
          <Wrapper>
            <Title>This is the title</Title>
          </Wrapper>
        </OuterCover>
        <SideBar>
          <Title>This is the sidebar</Title>
        </SideBar>
      </ExternalCover>
    </>
  );
};
//https://blog.logrocket.com/8-awesome-features-of-styled-components/
export default StyledComponents;
