import styled from "styled-components";
import {setBorder, setColors, setFonts, setLetterSpacing, setRem, setTransition} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColors.primaryColor};
  color: ${setColors.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFonts.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({color: setColors.primaryColor})};
  ${setLetterSpacing(3)};
  ${setTransition({time: '2s'})};

  &:hover {
    background: transparent;
    color: ${setColors.primaryColor};
  }
  ${props => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}}`};
  text-decoration: none;
  cursor: pointer;
`