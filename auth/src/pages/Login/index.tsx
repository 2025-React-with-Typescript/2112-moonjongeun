import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex h-screen w-full bg-[#fff] m-auto items-center justify-center">
        <div className="flex flex-col items-center border-1 border-[#ccc] w-140 h-115 rounded-lg p-8">
          <div className="font-bold text-3xl">로그인</div>
          <div className="flex flex-col gap-3 pt-12">
            <input type="text" className="flex p-3 w-105 h-12 items-center text-sm font-md text-[#111] placeholder:text-[#717171] border-1 rounded-sm border-[#0D55D9]" placeholder="아이디" / >
            <input type="password" className="flex p-3 w-105 h-12 items-center text-sm font-md text-[#111] placeholder:text-[#717171] border-1 rounded-sm border-[#0D55D9]" placeholder="비밀번호" / >
          </div>
          <div className="flex flex-col pt-12 ">
            <button className="flex items-center justify-center w-105 h-12 border-1 rounded-sm text-md font-md text-[#f0f0f0] bg-[#0D55D9]">로그인</button>
            <Link to="/Signup" className="flex justify-center pt-5 text-xs font-md text-[#888]">회원가입</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
