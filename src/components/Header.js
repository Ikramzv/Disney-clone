import React , { useEffect } from "react";
import styled  from 'styled-components'
import { Link , useNavigate } from 'react-router-dom'
import { selectUserName , selectUserPhoto , setUserLogin , setSignOut } from '../features/user/userSlice'
import { useSelector } from 'react-redux'
import { provider , auth } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'

function Header() {

    const dispatch = useDispatch()

    const userName = useSelector((state) => {
        return state.user.name
    })
    const userPhoto = useSelector(selectUserPhoto)

    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName ,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate('/')
            }else {
                navigate('/login')
            }
        })
    } , [])

    const signIn = () => {
        signInWithPopup(auth , provider).then(result => {
            let obj = {
                name: result.user.displayName,
                email: result.user.email ,
                photo: result.user.photoURL
            }
            
            dispatch(setUserLogin(obj))
            navigate('/')
        })
    }

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(setSignOut())
            navigate('/login')
        })
    }

    return (
        <Nav>
            <Link to={{pathname: '/'}}>
                <Logo src='/images/logo.svg' />
            </Link>

            { !userName ? 
                <Login onClick={signIn}>Login</Login> :
                <>
                <NavMenu>
                    <a href="#">
                        <img src="/images/home-icon.svg" />
                        <span>HOME</span>
                    </a>
                    <a href="#">
                        <img src="/images/search-icon.svg" />
                        <span>SEARCH</span>
                    </a>
                    <a href="#">
                        <img src="/images/watchlist-icon.svg" />
                        <span>WATCHLIST</span>
                    </a>
                    <a href="#">
                        <img src="/images/original-icon.svg" />
                        <span>ORIGINALS</span>
                    </a>
                    <a href="#">
                        <img src="/images/movie-icon.svg" />
                        <span>MOVIES</span>
                    </a>
                    <a href="#">
                        <img src="/images/series-icon.svg" />
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserImg src={userPhoto} onClick={signOut} />
                </>
            }

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
    z-index: 1000;

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


const Login = styled.div`

    position: relative;
    border: 2px solid white;
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 20px;
    margin-left: auto;
    overflow: hidden;
    cursor: pointer;
    text-transform: uppercase;
    transition: 200ms ease all;

    :hover {
        background: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

    :active {
        transform: scale(.98);
    }

`