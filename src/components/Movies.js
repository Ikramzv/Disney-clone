import React from "react";
import styled from "styled-components";

function Movies() {
    return( 
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    padding: 0 0 30px 0;
    height: 70vh;
    
    h4 {
        color: white;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4 , minmax(0 , 1fr));
    grid-gap: 25px;
    

`

const Wrap = styled.div`

    border-radius: 10px;
    overflow: hidden;
    height: 100px;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: 0 26px 20px -10px;
    transition: all 300ms ease-out;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    :hover {
        transform: scale(1.05);
        border-color: white;
        box-shadow: 0 52px 40px -20px;
    }


`