import React from "react";

import {
  Column1,
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  Subtitle,
  Heading,
  TopLine
} from "./InfoSectionElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  img,
  alt
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {/* <BtnWrap>
                                <Button to='home'>{buttonLabel}</Button>
                            </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
