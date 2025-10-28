import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // 입력 검증
    let newErrors = { username: "", password: "" };
    if (!username) newErrors.username = "아이디를 입력해주세요.";
    if (!password) newErrors.password = "비밀번호를 입력해주세요.";
    setErrors(newErrors);
    if (newErrors.username || newErrors.password) return;

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });

      // 서버 응답 구조 반영
      if (res.status === 200 && res.data?.success) {
        const token = res.data.data.accessToken;
        localStorage.setItem("token", token);
        navigate("/Main");
      } else {
        setErrors({ username: "", password: "로그인 실패. 다시 시도해주세요." });
      }
    } catch (err: any) {
      console.error(err); // 콘솔에 전체 에러 표시
      setErrors({
        username: "",
        password: err.response?.data?.message || "아이디 혹은 비밀번호를 확인해주세요.",
      });
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#fff] items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center border border-[#ccc] w-140 h-auto p-8 rounded-lg"
      >
        <div className="font-bold text-3xl">로그인</div>

        <div className="flex flex-col gap-3 pt-12">
          {/* 아이디 */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`flex p-3 w-105 h-12 items-center text-sm border rounded-sm placeholder:text-[#717171] ${
                errors.username ? "border-[#ff4d4f]" : "border-[#0D55D9]"
              }`}
            />
            {errors.username && <span className="text-[#ff4d4f] text-xs mt-1 ml-1">{errors.username}</span>}
          </div>

          {/* 비밀번호 */}
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`flex p-3 w-105 h-12 items-center text-sm border rounded-sm placeholder:text-[#717171] ${
                errors.password ? "border-[#ff4d4f]" : "border-[#0D55D9]"
              }`}
            />
            {errors.password && <span className="text-[#ff4d4f] text-xs mt-1 ml-1">{errors.password}</span>}
          </div>
        </div>

        <div className="flex flex-col pt-12 gap-3">
          <button
            type="submit"
            className="flex items-center justify-center w-105 h-12 text-md text-[#f0f0f0] bg-[#0D55D9] rounded-sm cursor-pointer"
          >
            로그인
          </button>

          <Link
            to="/Signup"
            className="flex justify-center pt-5 text-xs font-md text-[#888]"
          >
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
