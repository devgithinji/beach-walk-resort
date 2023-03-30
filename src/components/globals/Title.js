import React from 'react';
import styled from "styled-components";
import {setFonts, setLetterSpacing, setRem} from "../../styles";

const Title = ({className, title, center}) => {
    return (
        <h3 className={className}>
            {title}
        </h3>
    );
};


export default styled(Title)`
  font-size: ${setRem(36)};
  text-transform: capitalize;
  ${setLetterSpacing(5)};
  ${setFonts.slanted};
  text-align: center;
`;