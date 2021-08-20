import React from "react";
import styled from "styled-components";
import Header from './components/Header';
import {HeaderStart, HeaderEnd} from './components/styles'

const StyledApp = styled.div`
  font-family: 'Public Sans', sans-serif;
  color: #2F2F2F;
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "headerStart  header  headerEnd "
    ".            content .         "
    ".            footer  .         ";
  grid-template-rows: 40px auto auto;
  grid-template-columns: auto 1fr auto;

  @media (min-width: 768px) {
    grid-template-columns: auto minmax(auto, 768px) auto;
  }

  @media (min-width: 1024px) {
    grid-template-areas:
      "headerStart  header  header  headerEnd "
      ".            content image   .         "
      ".            footer  footer  .         ";
    grid-template-rows: 40px auto auto;
    grid-template-columns:
      minmax(10px, auto) minmax(auto, 690px) minmax(auto, 450px)
      minmax(10px, auto);
  }
`;

const Content = styled.div`
  background: green;
  grid-area: content;
`;

const Image = styled.div`
  grid-area: image;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Footer = styled.footer`
  background: orange;
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 100px 0;
`;

function App() {
  return (
    <StyledApp>
      <HeaderStart />
      <Header>
        <div>text</div>
        <div>social</div>
      </Header>
      <HeaderEnd />
      <Content>form</Content>
      <Image>
        <img src="dog.png" alt="dog" />
      </Image>
      <Footer>
        <div>logo</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.{" "}
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.{" "}
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.{" "}
        </div>
      </Footer>
    </StyledApp>
  );
}

export default App;