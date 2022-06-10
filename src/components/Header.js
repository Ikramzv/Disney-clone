import React from "react";
import styled  from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src='/images/logo.svg' />

            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images/user.webp" />
        </Nav>
    )
} 

export default Header;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0; right: 0;
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;

`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    height: 100%;
    display: flex;
    flex: 1 1 70%;
    align-items: center;
    margin-left: 50px;

    a {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 15px;
        transition: 1s ease border-bottom;
        position: relative;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;

            
        }
    }

    a:after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        height: 1px;
        background: white;
        transition: .5s cubic-bezier(0.1 , 0.7 , 1.0 , 0.1) all;
        transform-origin: left center;
        transform: scaleX(0);
        opacity: 0;

    }

    a:hover:after {
        opacity: 1;
        transform: scaleX(1);
    }

`

const UserImg = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    cursor: pointer;

`
