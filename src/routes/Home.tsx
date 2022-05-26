import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import Footer from "../components/Footer";

const Section = styled.section`
  background-color: #4e4e4e;
  font-size: 50px;
  color: white;
`;

const Number = styled.div`
  display: flex;
  padding-top: 500px;
  justify-content: center;
  align-items: center;
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
              <Number>1</Number>
            </Section>
            <Section className="section" id="section2">
              <Number>2</Number>
            </Section>
            <Section className="section" id="section3">
              <Number>3</Number>
            </Section>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

export default Fullpage;
