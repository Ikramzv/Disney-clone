import React from 'react'
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png' alt='viewer' />
            <video autoPlay loop muted width="100%" height="100%">
                <source src='/videos/1564674844-disney.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png' alt='viewer' />
            <video autoPlay loop muted width="100%" height="100%">
                <source src='/videos/1564676115-marvel.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png' alt='viewer' />
            <video autoPlay loop muted width="100%" height="100%">
                <source src='/videos/1564676296-national-geographic.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png' alt='viewer' />
            <video autoPlay loop muted width="100%" height="100%">
                <source src='/videos/1564676714-pixar.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png' alt='viewer' />
            <video autoPlay loop muted width="100%" height="100%">
                <source src='/videos/1608229455-star-wars.mp4' type='video/mp4'/>
            </video>
        </Wrap>
    </Container>
  )
}

export default Viewers;

const Container = styled.div`

    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(5 , minmax(0,1fr));
    padding: 30px 0 26px;
    gap: 25px;

`

const Wrap = styled.div`

    position: relative;     
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 20px;
    box-shadow: 0 26px 30px -10px black , 0 16px 10px -10px black ;
    cursor: pointer;
    transition: 250ms ease all;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0; left: 0;
        bottom: 0;
        opacity: 0;
        transition: 800ms opacity;
    }

    :hover {
        border-color: rgba(249, 249, 249, 0.8);
        transform: scale(1.05);
        box-shadow: 0 52px 60px -20px , 0 32px 20px -20px black;
    }

    :hover video {
        opacity: 1;
    }

`