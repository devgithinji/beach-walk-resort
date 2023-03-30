import React from 'react';
import {SmallBtn} from "../globals/Buttons";
import styled from "styled-components";
import PropTypes from "prop-types";
import {setBorder, setColors, setLetterSpacing, setRem, setShadow, setTransition} from "../../styles";

const Room = ({className, img, title, info, price}) => {

    return (
        <article className={className}>
            <div className="img-container">
                <img src={img} alt="single room"/>
                <div className="price">${price}</div>
            </div>
            <div className="room-info">
                <h4>{title}</h4>
                <p>{info}</p>
                <SmallBtn>Hello</SmallBtn>
            </div>
        </article>
    );
};

export default styled(Room)`
  background: ${setColors.mainWhite};
  margin: ${setRem(32)} 0;

  .img-container {
    background: ${setColors.mainBlack};
    position: relative;

    img {
      width: 100%;
      display: block;
      ${setTransition()}
    }

    &:hover img {
      opacity: 0.5;
    }

    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColors.mainWhite};
      ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({color: setColors.mainWhite})};
      opacity: 0;
      ${setTransition()};
    }

    &:hover .price {
      opacity: 1;
    }
  }

  .room-info {
    padding: ${setRem()};

    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};
    }

    p {
      ${setLetterSpacing()};
    }
  }

  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark}
  }
  cursor: pointer;
`;

Room.propTypes = {
    room: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}