import React , { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom'
import db from '../firebase'
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { selectUserName } from "../features/user/userSlice";
import { useSelector } from "react-redux";

function Detail() {

    const { id } = useParams()

    const [movie , setMovie] = useState()
    useEffect(() => {

        getDoc(doc(collection(db , 'movies') , id)).then((data) => {
            if(data.exists()) {
                setMovie(data.data())
            }else {
                return ;
            }
        })

    } , [])

    return (
        <Container>
            {movie && 
            <>
            <Background>
                <img src={movie.backgroundImg} alt={movie.title} />
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} alt="Title image" />
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
                {movie.subTitle}
            </SubTitle>
            <Description>
                {movie.description} 
            </Description> </> }
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    margin-top: 70px;
    min-height: calc(100vh - 70px);
    padding: 20px 4%;
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
    margin-top: 20px;
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

    display: flex;
    align-items: center;
    margin-top: 30px;

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
    transition: 300ms ease all ;

    span {
        font-size: 30px;
        color: white;
    }

    :hover {
        background: rgba(249,249,249);
        border: 2px solid black;

        span {
            color: black;
        }
    }


`
const GroupWatchButton = styled(AddButton)`

    background-color: rgb(0,0,0);

    :hover {
        background: #000;
    }

`

const SubTitle = styled.div`
    margin-top: 20px;
    background: grey;
    color: rgb(249,249,249);
    font-size: 15px;
    width: fit-content;
`

const Description = styled.div`
    margin-top: 16px;
    line-height: 1.8;
    font-size: 20px;
    color: rgb(249,249,249);
`