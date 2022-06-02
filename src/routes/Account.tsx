import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AccountTitle = styled.div`
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
  margin-top: 2rem;
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

const UploadText = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 2rem 0;
  text-align: center;
`;
const ReUploadText = styled.div`
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 1.5rem 0;
  text-align: center;
`;

const UploadImgBtn = styled.button`
  width: 8rem;
  height: 8rem;
  background-color: #ffffffb9;
  border-radius: 1rem;
  font-size: 1.1rem;
`;
const UploadImgInput = styled.input`
  display: none;
`;

const PreviewImg = styled.img`
  width: 8rem;
  height: 8rem;
`;

function Account() {
  /*useRef를 input에 사용 시 MutableRefObject를 사용*/
  const fileInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  // ImageRendering useState
  const [image, setImage] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>();

  // ImageRendering useEffect
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const onFileHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fileInputRef.current.click();
  };
  const onFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const submitForm = (data: any) => {
    console.log(data);
  };

  return (
    <Background>
      <AccountForm onSubmit={handleSubmit(submitForm)}>
        <AccountTitle>회원가입</AccountTitle>
        <Input
          placeholder="이메일"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email &&
          errors.email.type === "required" &&
          "이메일은 필수 항목입니다."}
        {errors.email &&
          errors.email.type === "pattern" &&
          "올바른 이메일을 작성해주세요."}
        <Input
          className="password"
          placeholder="비밀번호"
          type="password"
          {...register("password", {
            required: true,
            maxLength: 15,
            minLength: 8,
          })}
        />
        <Input
          className="confirmPassword"
          placeholder="비밀번호 확인"
          type="password"
          {...register("confirmPassword", {
            // required: true,
            maxLength: 15,
            minLength: 8,
          })}
        />
        <Input
          placeholder="이름"
          type="text"
          {...register("name", {
            required: true,
            minLength: 2,
            maxLength: 5,
          })}
        />
        <UploadText>프로필 사진 업로드</UploadText>
        <ReUploadText>재업로드를 원하시면 한번 더 클릭하세요.</ReUploadText>
        {preview ? (
          <PreviewImg src={preview} onClick={() => setImage(null)} />
        ) : (
          <UploadImgBtn onClick={onFileHandler}>파일 업로드</UploadImgBtn>
        )}
        <UploadImgInput
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={onFileChange}
        ></UploadImgInput>
        <BtnBox>
          <Btn type="submit">회원가입 완료</Btn>
        </BtnBox>
      </AccountForm>
    </Background>
  );
}

export default Account;
