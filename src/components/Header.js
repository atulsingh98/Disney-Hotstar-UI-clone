import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../store/authSlice";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log(authState);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/home");
      }
    });
  }, [authState.name]);
  const handleAuth = () => {
    if (!authState.name || authState.name === "") {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          //dispatch userdetails
          dispatch(
            login({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            })
          );
        })
        .catch((error) => alert(error.message));
    } else {
      auth.signOut().then(() => {
        dispatch(logout());
        navigate("/");
      });
    }
  };
  return (
    <Nav>
      <Logo>
        <Link to="/home">
          <img src="\images\logo.svg" alt="Disney+" />
        </Link>
      </Logo>
      {authState.name === "" || !authState.name ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <>
          <NavMenu>
            <StyledLink to="/home">
              <img src="/images/home-icon.svg" alt="home-icon" />

              <span>HOME</span>
            </StyledLink>
            <StyledLink to="/search">
              <img src="/images/search-icon.svg" alt="search-icon" />

              <span>SEARCH</span>
            </StyledLink>
            <StyledLink to="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="watchllist-icon" />

              <span>WATCHLIST</span>
            </StyledLink>
            <StyledLink to="/movies">
              <img src="\images\movie-icon (1).svg" alt="original-icon" />

              <span>MOVIES</span>
            </StyledLink>
            <StyledLink to="/originals">
              <img src="\images\original-icon.svg" alt="original-icon" />

              <span>ORIGINAL</span>
            </StyledLink>
            <StyledLink to="/series">
              <img src="\images\series-icon.svg" alt="original-icon" />

              <span>SERIES</span>
            </StyledLink>
          </NavMenu>
          <Signout>
            <StyledAvatar
              referrerpolicy="no-referrer"
              src={authState.photo}
            ></StyledAvatar>
            <Dropdown>
              <span onClick={handleAuth}>Signout</span>
            </Dropdown>
          </Signout>
        </>
      )}
    </Nav>
  );
}
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #090b13;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 12px;
  z-index: 3000;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 80px;
  margin-top: 4px;
  margin-right: 2rem;
  max-height: 70
  font-size: 0;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-end;
  padding: 0px;
  margin: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  @media (max-width: 996px) {
    display: none;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;

  img {
    height: 20px;

    width: 20px;
    min-height: 20px;
    z-index: auto;
  }
  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 4px 0 0 0;
    white-space: nowrap;
    position: relative;
    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }
  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;

  transition: all 250ms ease-in-out;
  &:hover {
    background-color: #f9f9f9;
    color:#000;
    border-color:transparent;
`;
const StyledAvatar = styled.img`
  src: url((props) => props.src);
  height: 70%;
  width: 100%;
  min-width: 100%;
  border-radius: 50%;
  cursor: pointer;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: -25px;
  background: rgb(19, 19, 19);
  border: 1px solid rgb(151, 151, 151);
  box-shadow: rgb(0 0 0/50%) 0px 0px;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  padding: 10px 20px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  opacity: 0;
`;
const Signout = styled.div`
  height: 80%;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${Dropdown} {
      opacity: 1;
      justify-content: center;
    }
  }
`;

export default Header;
