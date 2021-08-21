import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import { HeaderStart, HeaderEnd } from "./components/header/styles";
import Footer from "./components/footer/Foooter";
import {
  Button,
  ButtonPrimary,
  Pager,
  Input,
  RadioInput,
  RadioInputEditable,
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
  grid-template-columns: auto 1fr auto;

  @media (min-width: 768px) {
    grid-template-columns: auto minmax(auto, 768px) auto;
  }

  @media (min-width: 1024px) {
    grid-template-areas:
      "headerStart  header  header  headerEnd "
      ".            content image   .         "
      ".            footer  footer  .         ";
    grid-template-columns:
      minmax(10px, auto) minmax(auto, 690px) minmax(auto, 450px)
      minmax(10px, auto);
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
        <Button>dddddd</Button> <ButtonPrimary>sfsdfs</ButtonPrimary>
        <ButtonPrimary disabled>sfsdfs</ButtonPrimary>
        <Pager curentPage={3} total={3} />
        <Input id="inpt1" label="test" placeholder="haha" />
        <Input />


        <RadioInput id="huey" name="drone" value="huey" 
        //  onChange={e => console.log(e.target.value)}
         >30 $</RadioInput>
        <RadioInput id="dewey" name="drone" value="dewey" >100 $</RadioInput>
        {/* <RadioInput id="louie" name="drone" value="louie" ><span>s33333</span>$</RadioInput> */}
        <RadioInputEditable id="custom" name="drone" value="louie" after='$' />


        {/* <div>
  <input type="radio" id="huey" name="drone" value="huey"
         checked/>
  <label for="huey">Huey</label>
</div>

<div>
  <input type="radio" id="dewey" name="drone" value="dewey"/>
  <label for="dewey">Dewey</label>
</div>

<div>
  <input type="radio" id="louie" name="drone" value="louie"/>
  <label for="louie">Louie</label>
</div> */}

      </Content>
      <Image>
        <img src="dog.png" alt="dog" />
      </Image>
      <Footer />
    </StyledApp>
  );
}

export default App;
