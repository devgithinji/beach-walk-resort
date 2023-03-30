import React, {useState} from 'react';
import Room from "./Room";
import rooms from './rooms-data'
import Section from "../globals/Section";
import {media, setColors, setRem} from "../../styles";
import Title from "../globals/Title";
import styled from "styled-components";

const Rooms = () => {
    const [roomsList, _] = useState(rooms)


    return (
        <Section color={setColors.lightGrey}>
            <Title title="our rooms" center/>
            <RoomsCenter>
                {roomsList.map(room => <Room key={room.id} {...room}/>)}
            </RoomsCenter>
        </Section>
    );
};

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.tablet`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: ${setRem(32)}
  
  `};

  ${media.desktop`
     width: 100vw;
     max-width: 1170px;  
  `};

  ${media.large`
     grid-template-columns: repeat(3, 1fr);
  `};
`

export default Rooms;