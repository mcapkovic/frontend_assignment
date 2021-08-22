import React from "react";
import Header from "./components/header/Header";
import { HeaderStart, HeaderEnd } from "./components/header/styles";
import Footer from "./components/footer/Foooter";
import MultiStepForm from "./components/multiStepForm/MultiStepForm";
import { StyledApp, Content, Image } from "./styles";

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
