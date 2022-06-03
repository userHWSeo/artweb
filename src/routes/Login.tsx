import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Background = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.div`
  color: white;
  font-size: 2.5rem;
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

const AlertText = styled.p`
  color: #ff2f2f;
  font-size: 0.9rem;
  margin: 0.4rem 0;
`;

function Login() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const submitForm = (data: object) => {
    console.log(data);
  };
  return (
    <Background>
      <LoginForm onSubmit={handleSubmit(submitForm)}>
        <LoginTitle>로그인</LoginTitle>
        <Input
          placeholder="이메일"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        {(errors.password || errors.email) && (
          <AlertText>
            이메일 혹은 비밀번호를 확인해주세요<div className=""></div>
          </AlertText>
        )}
        <BtnBox>
          {/*DB의 로그인 정보와 같으면 홈으로 이동 그렇지 않으면 에러 렌더링*/}
          <Btn>로그인</Btn>
          <Btn>
            <Link to="/account">회원가입</Link>
          </Btn>
        </BtnBox>
        {/*로그인 시 에러가 발생하면 경고창을 띄울 예정*/}
      </LoginForm>
    </Background>
  );
}

export default Login;
