import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import cp from "../../assets/cp.png";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <center> <AboutImage style={{width:'70%'}} src={cp} /></center>
         
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
          Hello, my name is Abikumar, and I’m an engineering student at Sri Krishna college of engineeing and technology. I’m interested in being a software engineer.

I’ve enjoyed reading about different types of engineering and how they’re applied to different types of problems. I think it’s essential to have a wide range of knowledge when working in an engineering field to be prepared for anything.
          </StyledParagraph>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
