import React from 'react';
import styled, {css, keyframes} from "styled-components";
import {media, setBorder, setColors, setLetterSpacing, setRem} from "../../styles";

const fadeIn = (start, point, end) => {
    const animation = keyframes`
      0% {
        opacity: 0;
        transform: translateY(${start});
      }
      50% {
        opacity: 0.5%;
        transform: translateY(${point});
      }
      100% {
        opacity: 1;
        transform: translateY(${end});
      }
    `;

    return css`animation: ${animation} 3s ease-in-out`;
}


const Banner = ({title, text, children, greeting}) => {
    return (
        <BannerWrapper>
            <h1>{greeting} <span>{title}</span></h1>
            <div className="info">
                <p>{text}</p>
                {children}
            </div>
        </BannerWrapper>
    );
};


const BannerWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)};
  ${setLetterSpacing(3)};
  color: ${setColors.mainWhite};

  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};
    color: ${setColors.primaryColor};

    span {
      color: ${setColors.mainWhite};
    }
  }

  p {
    width: 85%;
    margin: 0 auto;
  }

  ${media.tablet`
     width: 70vw;
    ${setBorder({width: "6px", color: setColors.primaryColor})};
    
    p {
      width: 75%;
    }
  `}
  h1 {
    ${fadeIn('100%', '-10%', "0")};
  }

  .info {
    ${fadeIn('-100%', '10%', "0")};
  }


`

export default Banner;