import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
    email: "",
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 12) return;
    value = value.replace(/[;'"]/g, "");
    setPassword(value);
  };

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 12) return;
    value = value.replace(/[;'"]/g, "");
    setPasswordConfirm(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 50) return;
    setEmail(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) return;
    setNickname(e.target.value);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { username: "", password: "", passwordConfirm: "", nickname: "", email: "" };

    if (!username) newErrors.username = "아이디를 입력해주세요.";
    else if (username.length < 6 || username.length > 10) newErrors.username = "아이디는 6~10자여야 합니다.";

    if (!password) newErrors.password = "비밀번호를 입력해주세요.";
    else if (password.length < 8 || password.length > 12) newErrors.password = "비밀번호는 8~12자여야 합니다.";

    if (!passwordConfirm) newErrors.passwordConfirm = "비밀번호 확인을 입력해주세요.";
    else if (password !== passwordConfirm) newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";

    if (!nickname) newErrors.nickname = "닉네임을 입력해주세요.";

    if (!email) newErrors.email = "이메일을 입력해주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "유효한 이메일을 입력해주세요.";

    setErrors(newErrors);

    Object.entries(newErrors).forEach(([key, val]) => {
      if (val) console.error(`${key} Error: ${val}`);
    });

    if (Object.values(newErrors).some((err) => err)) return;

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/register",
        { username, password, nickname, email },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200 || res.status === 201) {
        alert("회원가입이 완료되었습니다. 로그인 후 이용해주세요.");
        navigate("/");
      }
    } catch (err: any) {
      console.error("Signup API Error:", err.response?.data || err);

      const message = err.response?.data?.message || "회원가입 실패";

      if (message.includes("이미 존재")) {
        setErrors((prev) => ({
          ...prev,
          username: message.includes("아이디") ? message : prev.username,
          email: message.includes("이메일") ? message : prev.email,
        }));
      } else {
        alert(message);
      }
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#fff] items-center justify-center">
      <form onSubmit={handleSignup} className="flex flex-col items-center border border-[#ccc] w-140 p-8 rounded-lg">
        <div className="font-bold text-3xl">회원가입</div>

        <div className="flex flex-col gap-3 pt-12">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={handleUsernameChange}
              className={`flex p-3 w-105 h-12 items-center text-sm border rounded-sm placeholder-[#717171] ${
                errors.username ? "border-[#ff4d4f]" : "border-[#0D55D9]"
              }`}
            />
            {errors.username && <span className="text-[#ff4d4f] text-xs mt-1 ml-1">{errors.username}</span>}
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
              className={`flex p-3 w-105 h-12 items-center text-sm border rounded-sm placeholder-[#717171] ${
                errors.password ? "border-[#ff4d4f]" : "border-[#0D55D9]"
              }`}
            />
            {errors.password && <span className="text-[#ff4d4f] text-xs mt-1 ml-1">{errors.password}</span>}
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              className={`flex p-3 w-105 h-12 items-center text-sm border rounded-sm placeholder-[#717171] ${
                errors.passwordConfirm ? "border-[#ff4d4f]" : "border-[#0D55D9]"
              }`}
            />
            {errors.passwordConfirm && <span className="text-[#ff4d4f] text-xs mt-1 ml-1">{errors.passwordConfirm}</span>}
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={handleNicknameChange}
              className={`flex p-3 w-105 h-12 items-center text-sm border rounded-sm placeholder-[#717171] ${
                errors.nickname ? "border-[#ff4d4f]" : "border-[#0D55D9]"
              }`}
            />
            {errors.nickname && <span className="text-[#ff4d4f] text-xs mt-1 ml-1">{errors.nickname}</span>}
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
              className={`flex p-3 w-105 h-12 items-center text-sm border rounded-sm placeholder-[#717171] ${
                errors.email ? "border-[#ff4d4f]" : "border-[#0D55D9]"
              }`}
            />
            {errors.email && <span className="text-[#ff4d4f] text-xs mt-1 ml-1">{errors.email}</span>}
          </div>
        </div>

        <div className="flex flex-col pt-12 gap-3">
          <button
            type="submit"
            className="flex items-center justify-center w-105 h-12 text-md text-[#f0f0f0] bg-[#0D55D9] rounded-sm cursor-pointer"
          >
            회원가입
          </button>

          <Link
            to="/"
            className="flex items-center justify-center w-105 h-12 text-md text-[#0D55D9] bg-[#fff] border rounded-sm"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
