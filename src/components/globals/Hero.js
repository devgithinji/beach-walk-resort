import styled from "styled-components";
import {setBackground, setFlex} from "../../styles";

const Hero = styled.header`
  min-height: 100vh;
  ${({img}) => setBackground({
    img: img,
    color: "rgba(0,0,0,0.5)"
  })};
  ${setFlex({})}
`

export default Hero;