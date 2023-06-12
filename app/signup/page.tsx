"use client";
import Image from "next/image";
import NavbarLogin from "../components/navbar/NavbarLogin";
import Input from "../components/input/input";
import { useState } from "react";

const LogIn = () => {
  //   type Variant = "LOGIN" | "REGISTER"

  const [name, setName] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [variant , setVariant] = useState<Variant>('LOGIN')
  return (
    <div className=" w-full h-screen bg-no-repeat bg-cover bg-[url('https://an2-img.amz.wtchn.net/image/v2/v_rtGmsGmmSGuScg0hC76g.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZNE5Ea3hOVGN4T1RJM05UQTVOVGs0TXlKOS5mRjlhcmYwZWNJd2cyNUl4YnBfZkZyV0E5UmpkMnhLdmVEUnhUUU1jUXN3')]">
      <div className="w-full h-screen bg-black bg-opacity-60 bg-cover">
        <NavbarLogin variant="로그인" />
        <div className="flex flex-col justify-center items-center">
          <div className=" mt-52">
          <div className="flex gap-32 mb-3">
                  <h2 className="text-white text-xl font-semibold">회원가입</h2>
                  </div>
                  <form action="/api/auth/signup" method="POST">
            <Input
              id="name"
              placeholder="이름 (2자 이상)"
              type="text"
              name="name"
              onChange={(e: any) => {
                setName(e.target.value);
              }}
              value={name}
              autoComplete="off"

            />
            <Input
              id="email"
              placeholder="이메일 (example@gmail.com)"
              type="email"
              name="email"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              value={email}
              autoComplete="off"

            />
            <Input
              id="password"
              name="password"
              placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상"
              type="password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
              value={password}
              autoComplete="off"

            />
          
 <div className="mt-6">
      <ul className="text-white text-xs space-y-2">
      <li className="space-x-2">
          <input id="checkall" type="checkbox" />
          <label htmlFor="checkall" className="hover:cursor-pointer">
            전체 약관에 동의합니다
          </label>
        </li>
        <li className="space-x-2">
          <input id="check1" type="checkbox"/>
          <label htmlFor="check1" className="hover:cursor-pointer">
            만 14세 이상입니다.
          </label>
        </li>
        <li className="space-x-2">
          <input id="check2" type="checkbox"/>
          <label htmlFor="check2" className="hover:cursor-pointer">
            왓챠피디아 서비스 이용약관에 동의합니다 (필수)
          </label>
        </li>
        <li className="space-x-2">
          <input id="check3" type="checkbox" />
          <label htmlFor="check3" className="hover:cursor-pointer">
            왓챠 서비스 이용약관에 동의합니다 (필수)
          </label>
        </li>
        <li className="space-x-2">
          <input id="check4" type="checkbox" />
          <label htmlFor="check4" className="hover:cursor-pointer">
            개인정보 수집 및 이용에 대한 안내에 동의합니다 (필수)
          </label>
        </li>
        <li className="space-x-2">
          <input id="check5" type="checkbox" />
          <label htmlFor="check5" className="hover:cursor-pointer">
            신작 알림 이벤트 정보 수신에 동의합니다 (선택)
          </label>
        </li>
      </ul>
      </div>
            <button
              className="bg-[#F82F62] rounded-full mt-4 py-2 text-white w-full"
              type="submit"
            >
              계정 생성하기
            </button>
    <span className="flex text-white text-xs mt-3 justify-center">결제 정보요? 충분히 둘러보시고 입력해도 늦지 않아요</span>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
