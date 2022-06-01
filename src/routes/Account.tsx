import React, { useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  justify-content: center;
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
  &::placeholder {
    color: #ecebeb;
  }
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
  cursor: pointer;
  a {
    color: black;
  }
`;

const PasswordAlert = styled.div`
  margin-top: 4rem;
  color: #f3ff83fd;
  font-size: 1.2rem;
`;

function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const onEmailHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onNameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <Background>
      <LoginForm>
        <LoginTitle>회원가입</LoginTitle>
        <Input
          placeholder="이메일"
          type="email"
          value={email}
          onChange={onEmailHandler}
          required
        ></Input>
        <Input
          className="password"
          placeholder="비밀번호"
          type="password"
          minLength={8}
          maxLength={15}
          value={password}
          onChange={onPasswordHandler}
          required
        ></Input>
        <Input
          className="confirmPassword"
          placeholder="비밀번호 확인"
          type="password"
          minLength={8}
          maxLength={15}
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
          required
        ></Input>
        <Input
          value={name}
          placeholder="이름"
          type="text"
          minLength={2}
          maxLength={10}
          onChange={onNameHandler}
          required
        ></Input>
        <BtnBox>
          <Btn>회원가입 완료</Btn>
        </BtnBox>
        {password !== confirmPassword ? (
          <PasswordAlert>비밀번호와 비밀번호 확인이 다릅니다.</PasswordAlert>
        ) : null}
      </LoginForm>
    </Background>
  );
}

export default Account;
