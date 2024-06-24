import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../common/store";
import {
  selectLoggedInUser,
  selectUserError,
  selectUserLoading,
} from "./common/slice";
import { loginUser } from "./common/action";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("mavoungouzenou@gmail.com");
  const [password, setPassword] = useState("kritektest");
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const user = useSelector(selectLoggedInUser);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <main className="flex">
      <section className="w-1/2">
        <div className="flex overflow-hidden overflow-x-hidden overflow-y-hidden flex-1 justify-center items-center bg-stone-50">
          <img
            loading="lazy"
            alt="login"
            src={
              "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fa0a411352fa846ba9f7131b940a4ae9f"
            }
            className="object-cover w-full aspect-[4_/_3]"
          />
        </div>
      </section>
      <section className="flex flex-col flex-1 justify-center items-center px-12 bg-white w-1/2">
        <h2 className="mb-5 text-2xl text-neutral-800">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 w-full">
            <label htmlFor="email" className="pb-1.5 text-sm text-neutral-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              defaultValue={email}
              onChange={handleEmailChange}
              className="box-border p-2.5 w-full rounded rounded-tl border border-t border-r border-b border-l border-solid border-stone-300"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="" className="pb-1.5 text-sm text-neutral-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              defaultValue={password}
              onChange={handlePasswordChange}
              className="box-border p-2.5 w-full rounded rounded-tl border border-t border-r border-b border-l border-solid border-stone-300"
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={loading}
            type="submit"
            className="p-4 w-full text-white bg-[#701a75] rounded rounded-tl border-white cursor-pointer border-[none]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p>{error}</p>}
          {user && <p>Welcome, Malahim!</p>}
        </form>
      </section>
    </main>
  );
};

export default Login;
