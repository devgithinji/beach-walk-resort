import React from 'react';
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from '../../images/aboutBcg.jpeg'
import styled from "styled-components";
import {PrimaryBtn} from "../globals/Buttons";
import {media, setBorder, setColors, setLetterSpacing, setRem} from "../../styles";

const About = () => {
    return (
        <Section>
            <AboutCenter>
                <div className="about-img">
                    <img src={aboutImg} alt="about us"/>
                </div>
                <div className="about-info">
                    <Title title="About Us"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet, beatae commodi
                        delectus earum est et eum ex, expedita fuga fugit incidunt iure minima molestias optio quisquam
                        similique veniam.</p>
                    <PrimaryBtn>Read More</PrimaryBtn>
                </div>
            </AboutCenter>
        </Section>
    );
};

const AboutCenter = styled.div`
  .about-img, .about-info {
    padding: ${setRem(30)};
  }

  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({width: setRem(6), color: setColors.primaryColor})}
    }
  }

  .about-info {
    p {
      ${setLetterSpacing(3)}
    }
  }

  width: 90vw;
  margin: 0 auto;

  ${media.desktop`
      .about-img,
      .about-info {
      padding: ${setRem(0)};
      }
    width: 100vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
    .about-img, .about-info {
        align-self: center;
    }
    .about-info {
        p {
            width: 80%;
        }
    }
    `}
`

export default About;