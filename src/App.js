import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import { HeaderStart, HeaderEnd } from "./components/header/styles";
import Footer from "./components/footer/Foooter";
import MultiStepForm from "./components/multiStepForm/MultiStepForm";

import {
  Button,
  ButtonPrimary,
  Pager,
  Input,
  RadioInput,
  RadioInputEditable,
  Dropdown,
  Checkbox,
} from "./components/common";

const StyledApp = styled.div`
  font-family: "Public Sans", sans-serif;
  color: #2f2f2f;
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "headerStart  header  headerEnd "
    ".            content .         "
    ".            footer  .         ";
  grid-template-rows: 40px auto min-content;
  grid-template-columns: minmax(10px, auto) 1fr minmax(10px, auto);

  @media (min-width: 768px) {
    grid-template-columns: auto minmax(auto, 700px) auto;
  }

  @media (min-width: 1024px) {
    grid-template-areas:
      "headerStart  header  header  headerEnd "
      ".            content image   .         "
      ".            footer  footer  .         ";
    grid-template-columns:
      minmax(25px, auto) minmax(auto, 690px) minmax(auto, 450px)
      minmax(25px, auto);
  }
`;

const Content = styled.div`
  /* background: green; */
  grid-area: content;
`;

const Image = styled.div`
  grid-area: image;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

function App() {
  return (
    <StyledApp>
      <HeaderStart />
      <Header />
      <HeaderEnd />
      <Content>
        <MultiStepForm />
      </Content>
      <Image>
        <img src="dog.png" alt="dog" />
      </Image>
      <Footer />
    </StyledApp>
  );
}

export default App;
