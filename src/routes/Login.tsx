import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Backgrond = styled.div`
  height: 100vh;
  background-color: #4e4e4e;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
`;

const LoginTitle = styled.div`
  color: white;
  font-size: 3rem;
  margin-bottom: 5rem;
`;

const Input = styled.input`
  width: 20rem;
  height: 1.5rem;
  margin: 1rem 0;
  background-color: #4e4e4e;
  border: none;
  border-bottom: 0.1rem solid white;
  outline: none;
  color: white;
  font-size: 1rem;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 15rem;
`;

const Btn = styled.button`
  margin-top: 2rem;
  width: 10rem;
  height: 2.5rem;
  border-radius: 2rem;
  border: none;
  outline: none;
  a {
    color: black;
  }
`;

function Login() {
  return (
    <Backgrond>
      <LoginForm>
        <LoginTitle>로그인</LoginTitle>
        <Input placeholder="이메일" type="email"></Input>
        <Input placeholder="비밀번호" type="password"></Input>
        <BtnBox>
          {/*DB의 로그인 정보와 같으면 홈으로 이동 그렇지 않으면 에러 렌더링*/}
          <Btn>
            <Link to="/">로그인</Link>
          </Btn>
          <Btn>
            <Link to="/sign-up">회원가입</Link>
          </Btn>
        </BtnBox>
        {/*로그인 시 에러가 발생하면 경고창을 띄울 예정*/}
      </LoginForm>
    </Backgrond>
  );
}

export default Login;
