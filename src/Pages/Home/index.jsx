import React from "react";
import { Announcement } from "../../Components";
import { Categories } from "../../Components/Category";
import News from "../../Components/News";
import { NavBar } from "../../Components/NavBar";
import { Slider } from "../../Components/Slider";
import * as S from "./style";
import { Newsletter } from "../../Components/Newsletter";
import { Footer } from "../../Components/Footer";

function Home() {
  return (
    <>
      <Announcement />
      <NavBar />
      <S.Container>
        <Slider />
        <Categories />
        <News />
      </S.Container>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default Home;
