import React from "react";
import styled from "styled-components";

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/disney-background1.webp" alt="Detail page's background" />
            </Background>
            <ImageTitle>
                <img src="https://i0.wp.com/pixarpost.com/wp-content/uploads/2020/10/6ceb9-pixar-bao-logo.jpg?resize=1200%2C675&ssl=1" alt="Title image" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="play button" />
                    <span>Play</span>
                </PlayButton>

                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="play button" />
                    <span>Trailer Button</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="Group Icon" />
                </GroupWatchButton>    
            </Controls>
            <SubTitle>
                2018 7m Family , Fantasy, Kids , Animation
            </SubTitle>
            <Description>
                A Chinese mom who's said when her grown son leaves home gets another chance at motherhood when one of her dumplings springs 
                to life. But she finds that nothing stays cute and small forever 
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    margin-top: 70px;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    color: white;
`

const Background = styled.div`

    position: fixed;
    top: 0; right: 0;
    left: 0; bottom: 0;
    z-index: -1;


    img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        image-rendering: pixelated;
        -webkit-filter: blur(0px);
    }
`

const ImageTitle = styled.div`

    min-width: 200px;
    width: 35vw;
    min-height: 170px;
    height: 30vh;
    position: relative;
    top: 50px;
    overflow: hidden;
    border-radius: 70px;
    box-shadow: 0 46px 40px -10px black ;

    img {
        width: 100%;
        height: 100%;   
        image-rendering: pixelated;

    }

`

const Controls = styled.div`

    position: relative;
    top: 110px;
    display: flex;
    align-items: center;

    * {
        
    }


`

const PlayButton = styled.button`

    border-radius: 7px;
    display: flex;
    align-items: center;
    font-size: 15px;
    border: none;
    padding: 0 24px;
    height: 56px;
    background: rgb(249,249,249);
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 200ms ease all;

    :hover {
        background: rgb(198,198,198);
    }


`
const TrailerButton = styled(PlayButton)`

    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: white;
    text-transform: uppercase;

    :hover {
        color: black;
    }


`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    margin-right: 16px;

    span {
        font-size: 30px;
        color: white;
    }


`
const GroupWatchButton = styled(AddButton)`

    background-color: rgb(0,0,0);

`

const SubTitle = styled.div`

    position: relative;
    top: 140px;
    background: grey;
    color: rgb(249,249,249);
    font-size: 15px;
    width: fit-content;
`

const Description = styled.div`
    position: relative;
    top: 156px;
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249,249,249);
`