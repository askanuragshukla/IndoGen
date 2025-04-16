import React from "react";
import Play from "../../images/google-play-soon.png";
import Img from "../../images/app.png";
import { AppStore } from "../HeroElements";

import {
  HeroImageContainer,
  AppWrapper,
  App,
  TextWrapper,
  AppTitle,
  AppPara
} from "./HeroImageElements";

const HeroImage = () => {
  return (
    <HeroImageContainer>
      <AppWrapper>
        <App src={Img} alt="" />
      </AppWrapper>
      <TextWrapper>
        <AppTitle>
          <h2> नमस्कार भाइयों, </h2>
          <h1>
            आपका स्वागत है भारत के <br /> विशालतम मछली पालन{" "}
          </h1>
          <h2>किसान संघ में </h2>
        </AppTitle>
        <AppPara>
          <p>हमारे एप्लिकेशन डाउनलोड करें</p>
        </AppPara>
        <AppStore>
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={Play}
              style={{ width: "50%", height: "auto", alignContent: "left" }}
              alt="/"
            />
          </a>
        </AppStore>
      </TextWrapper>
    </HeroImageContainer>
  );
};

export default HeroImage;
