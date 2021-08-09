import React from "react";
import { Container, ButtonStyled } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWraper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrapper,
  Img,
} from "./infoSection.style";
const InfoSection = ({
  lightBg,
  imgStrart,
  lightTopLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  topLine,
  primary,
  start,
  img,
  alt,
}) => {
    console.log(img)
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStrart={imgStrart}>
            <InfoColumn>
              <TextWraper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                <Link to="/sign-up">
                  <ButtonStyled big="true" fontbig="true" primary={primary.toString()}>
                    {buttonLabel}
                  </ButtonStyled>
                </Link>
              </TextWraper>
            </InfoColumn>
            <InfoColumn>
                <ImgWrapper start={start}>
                        <Img src={img} alt={alt}/>
                </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
