import React from "react";
import styled from "styled-components";
import bgImg from "../src/assets/river.jpg";
import Login from "./components/Login/Login";
import Main from "./components/Login/Main";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Login />
        <Main />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;
