import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Jua", sans-serif;
`;

const Box = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 35rem;
  height: 30rem;
  margin: 0 10rem;
  border-radius: 0.5rem;
  box-shadow: 0px 20px 100px black;
`;

const Text = styled.div`
  text-align: center;
  margin: 0 10rem;
  h2 {
    font-size: 3rem;
    margin-bottom: 6rem;
    color: white;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
  a {
    color: white;
  }
  svg {
    font-size: 1rem;
    margin-left: 1rem;
  }
`;

const Fullpage = () => (
  <ReactFullpage
    /*
          FullScreen 예제 코드
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
      */
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            <Section className="section" id="section1">
              <Box>
                <Img
                  src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg"
                  alt="artwork"
                />
                <Text>
                  <h2>작품에 관심이 있으신가요 ?</h2>
                  <Link to="/artwork">
                    <div>
                      작품 보러가기
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="50"
                        height="50"
                        fill="white"
                      >
                        <path d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z" />
                      </svg>
                    </div>
                  </Link>
                </Text>
              </Box>
            </Section>
            <Section className="section" id="section2">
              <Box>
                <Text>
                  <h2>혹은 관심있는 작가가 있나요 ?</h2>
                  <Link to="/artist">
                    <div>
                      작가 보러가기
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="50"
                        height="50"
                        fill="white"
                      >
                        <path d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z" />
                      </svg>
                    </div>
                  </Link>
                </Text>
                <Img
                  src="https://cdn.pixabay.com/photo/2016/06/13/13/17/painter-1454205_960_720.jpg"
                  alt="artist"
                />
              </Box>
            </Section>
            <Section className="section" id="section3">
              <Box>
                <Img
                  src="https://cdn.pixabay.com/photo/2016/02/03/13/35/museum-1177081_960_720.jpg"
                  alt="exhibition"
                />
                <Text>
                  <h2>아니면 이런 전시회는 어떠신가요 ?</h2>
                  <Link to="/exhibition">
                    <div>
                      전시회 보러가기
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="50"
                        height="50"
                        fill="white"
                      >
                        <path d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z" />
                      </svg>
                    </div>
                  </Link>
                </Text>
              </Box>
            </Section>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

export default Fullpage;
