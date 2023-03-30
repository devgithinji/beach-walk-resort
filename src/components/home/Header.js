import React from 'react';
import Hero from "../globals/Hero";
import aboutImg from '../../images/aboutBcg.jpeg'
import Banner from "../globals/Banner";
import {PrimaryBtn} from "../globals/Buttons";

const Header = () => {
    return (
        <Hero img={aboutImg}>
            <Banner
                greeting="welcome to"
                title="beachwalk resort"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur dicta dolorem fugit laboriosam libero modi optio
                possimus similique suscipit veritatis?"
            >
                <PrimaryBtn t="1rem">View Details</PrimaryBtn>
                {/*<PrimaryBtn as="a" href="https://www.google.com">View Details</PrimaryBtn>*/}
            </Banner>
        </Hero>
    );
};

export default Header;