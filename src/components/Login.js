import React from 'react'
import styled from 'styled-components'
import { auth } from '../firebase'


function Login() {
     
    

  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt='cta logo 1' />
            <SignUp>Get All There</SignUp>
            <Description>
                Get Premier Acces to Raya and the Last Dragon for an additional for
                with a Disney+ subscription. As of 03/26/21 , the price of Disneys
                and The Disney Bundle will increase by $1
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="cta logo 2" />
        </CTA>
    </Container>

  )
}

export default Login

const Container = styled.div`
    position: relative;
    margin-top: 70px;
    display: flex;
    align-items: top;
    justify-content: center;
    height: calc(100vh - 70px);

    :before {
        content: '';
        position: absolute;
        bottom: 0;
        top: 0; right: 0; left: 0;
        opacity: .7;
        background-image: url(/images/login-background.jpg);
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
    }

`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 17px 0;
    margin-top: 100px;


`

const CTALogoOne = styled.img`

    width: 100%;

`

const SignUp = styled.a`

    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    padding: 17px 0;
    font-size: 18px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 250ms ease;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 13px;

    &:hover {
        background-color: #0483ee;
        letter-spacing: 5px;
    }
`

const Description = styled.p`

    color: white;
    font-size: 15px;
    line-height: 1.8;
    letter-spacing: 1.5px;
    text-align: center;
`

const CTALogoTwo = styled.img`

    width: 100%;



`