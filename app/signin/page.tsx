'use client'
import Image from "next/image";
import NavbarLogin from '../components/navbar/NavbarLogin'
import Input from "../components/input/input";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaApple } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import {signIn} from 'next-auth/react'

const LogIn = () => {

  type Variant = "LOGIN" | "REGISTER"

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [variant , setVariant] = useState<Variant>('LOGIN')
    
    const loginHandler = ()=>{
      signIn()
    }

    return (
        <div className=" w-full h-screen bg-no-repeat bg-cover bg-[url('https://an2-img.amz.wtchn.net/image/v2/v_rtGmsGmmSGuScg0hC76g.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZNE5Ea3hOVGN4T1RJM05UQTVOVGs0TXlKOS5mRjlhcmYwZWNJd2cyNUl4YnBfZkZyV0E5UmpkMnhLdmVEUnhUUU1jUXN3')]">
            <div className="w-full h-screen bg-black bg-opacity-60 bg-cover">
                <NavbarLogin variant="회원가입" />
                <div className="flex flex-col justify-center items-center">
                  <div className=" mt-56">
                    <div className="flex gap-32 mb-3">
                  <h2 className="text-white text-xl font-semibold">로그인</h2>
                  <p className="text-xs mt-1 text-gray-400 hover:underline cursor-pointer">비밀번호를 잊어버리셨나요?</p>
                  </div>
                  <form action='/api/auth/login' method="POST">
                <Input
              id="email"
              placeholder="이메일 (example@gmail.com)"
              type="email"
              name="email"
              onChange={(e:any) => {
                setEmail(e.target.value);
              }}
              value={email}
              autoComplete="on"

            />
            <Input
              id="password"
              name="password"
              placeholder={`${
                variant === "LOGIN"
                  ? "비밀번호"
                  : "영문, 숫자, 특문 중 2개 조합 10자 이상"
              }`}
              type="password"
              onChange={(e:any) => {
                setPassword(e.target.value);
              }}
              value={password}
              autoComplete="on"
            />
             <button 
              className="bg-[#F82F62] opacity-50   rounded-full mt-4 py-2 text-white w-full" type="submit">
                로그인
              </button>
            </form>

              <hr className="mt-8 opacity-25"></hr>
              <div className="mt-4">
                <h2 className="text-gray-400  text-xs">
                  다른 방법으로 로그인하기
                </h2>
              </div>
              <div className="flex flex-row items-center gap-6 mt-4 justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                    onClick={loginHandler}>
                  <AiFillGithub size={25} fill="black" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                    onClick={loginHandler}>
                  <FcGoogle size={25} />
                </div>
                <div className="w-10 h-10 bg-[#00a2fa] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <TfiTwitterAlt size={25} fill="white" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <FaApple size={25} />
                </div>
                <div className="w-10 h-10 bg-[#00c801] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <Image
                    src={
                      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiMwMEM4MDEiLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTAgMEgyNFYyNEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xOS42MTQgMTUuNDY4Yy0yLjAzMiAyLjM0LTYuNTggNS4xOS03LjYxNCA1LjYyNS0xLjAzNC40MzUtLjg4Mi0uMjc4LS44NC0uNTIyLjAyNi0uMTQ2LjEzOS0uODMuMTM5LS44My4wMzMtLjI0Ny4wNjYtLjYzMS0uMDMyLS44NzYtLjEwOC0uMjctLjUzOC0uNDEtLjg1My0uNDc4LTQuNjU4LS42MTUtOC4xMDYtMy44Ny04LjEwNi03Ljc1NiAwLTQuMzM1IDQuMzQ4LTcuODYyIDkuNjkyLTcuODYyczkuNjkyIDMuNTI3IDkuNjkyIDcuODYyYzAgMS43MzUtLjY3MyAzLjI5Ny0yLjA3OCA0LjgzN3pNOC4yMDYgMTIuMTk0SDYuNzg4VjguODUyYzAtLjI4LS4yMjgtLjUwOC0uNTA4LS41MDhzLS41MDguMjI4LS41MDguNTA4djMuODVjMCAuMjguMjI4LjUwOC41MDguNTA4aDEuOTI2Yy4yOCAwIC41MDgtLjIyOC41MDgtLjUwOHMtLjIyNy0uNTA4LS41MDgtLjUwOHptMS45OTItMy4zNDJjMC0uMjgtLjIyOC0uNTA4LS41MDgtLjUwOHMtLjUwOC4yMjgtLjUwOC41MDh2My44NWMwIC4yOC4yMjguNTA4LjUwOC41MDhzLjUwOC0uMjI4LjUwOC0uNTA4di0zLjg1em00LjYzNiAwYzAtLjI4LS4yMjgtLjUwOC0uNTA4LS41MDhzLS41MDkuMjI4LS41MDkuNTA4djIuMzgybC0xLjk3NC0yLjY4N2MtLjA5NS0uMTI3LS4yNDctLjIwMy0uNDA2LS4yMDMtLjA1NCAwLS4xMDkuMDA5LS4xNjEuMDI2LS4yMDguMDctLjM0Ny4yNjMtLjM0Ny40ODJ2My44NWMwIC4yOC4yMjguNTA4LjUwOC41MDhzLjUwOC0uMjI4LjUwOC0uNTA4VjEwLjMybDEuOTc0IDIuNjg3Yy4wOTYuMTI3LjI0Ny4yMDMuNDA2LjIwMy4wNTUgMCAuMTA5LS4wMDkuMTYxLS4wMjYuMjA4LS4wNy4zNDgtLjI2My4zNDgtLjQ4MnYtMy44NXptMy4xMTYgMi40MzNjLjI4IDAgLjUwOC0uMjI4LjUwOC0uNTA4cy0uMjI4LS41MDgtLjUwOC0uNTA4aC0xLjQxN1Y5LjM2aDEuNDE3Yy4yOCAwIC41MDgtLjIyOC41MDgtLjUwOHMtLjIyOC0uNTA4LS41MDgtLjUwOGgtMS45MjZjLS4yOCAwLS41MDguMjI4LS41MDguNTA4VjEyLjcwMmMwIC4yOC4yMjguNTA4LjUwOC41MDhoMS45MjZjLjI4IDAgLjUwOC0uMjI4LjUwOC0uNTA4cy0uMjI4LS41MDgtLjUwOC0uNTA4aC0xLjQxN3YtLjkxaDEuNDE3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyA3KSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    }
                    width={60}
                    height={60}
                    alt="LineLogo"
                  />
                </div>
              </div>
            </div>
              </div>
            </div>
        </div>
    );
}

export default LogIn;