import React from "react";
import styled from "styled-components";

const FootBox = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #4e4e4e;
  z-index: 99;
  position: fixed;
  font-size: 1rem;
  bottom: 0;
`;

function Footer() {
  return (
    <>
      <FootBox></FootBox>
    </>
  );
}

export default Footer;
