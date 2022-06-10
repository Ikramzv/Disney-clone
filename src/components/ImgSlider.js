import React from "react";
import styled from "styled-components";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 650,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 50
    }

    return (
            <Carousel {...settings}>
                <Wrap>
                    <img src="/images/slider-badging.jpg" alt="Slider"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" alt="Slider"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scale.jpg" alt="Slider"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scales.jpg" alt="Slider"/>
                </Wrap>
            </Carousel>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    padding-top: 20px;

    ul li button {
        :before {
            font-size: 10px;
            color: rgb(150,158,171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }

`

const Wrap = styled.div`
    width: 100%;
    height: 100%;

    cursor: pointer;
    
    img {
        border: 5px solid transparent;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        filter: drop-shadow(0 0 10px black);
        transition: .3s ease border-color;

        :hover {
            border-color: rgba(249,249,249,.8);
        }
    }

`