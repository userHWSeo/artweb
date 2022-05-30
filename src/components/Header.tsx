import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  position: fixed;
  top: 0;
  z-index: 99;
  font-family: "Jua", sans-serif;
`;

const HomeBtn = styled.span`
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
`;

const Category = styled.span`
  margin: 0 2rem;
  cursor: pointer;
  a {
    color: white;
  }
`;

const Icons = styled.div`
  display: flex;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 2rem;
    cursor: pointer;
  }
`;
const Icon = styled.div``;

function Header() {
  return (
    <>
      <NavBar>
        <HomeBtn>예술 서비스</HomeBtn>
        <Menu>
          <Category>
            <Link to="/">홈</Link>
          </Category>
          <Category>
            <Link to="/artist">작가</Link>
          </Category>
          <Category>
            <Link to="/artwork">작품</Link>
          </Category>
          <Category>
            <Link to="/exhibition">전시회</Link>
          </Category>
        </Menu>
        <Icons>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
          <Icon>
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
              >
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
              </svg>
            </Link>
          </Icon>
        </Icons>
      </NavBar>
    </>
  );
}

export default Header;
