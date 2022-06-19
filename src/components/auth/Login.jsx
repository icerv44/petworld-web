import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/ErrorContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);
      navigation(`/pet`, { replace: true });
      alert("Login Success");
    } catch (err) {
      alert("Login Fail");
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <form
        className="flex w-full h-[747px] bg-[#F8F8F8]"
        // onSubmit={handleSubmitLogin}
      >
        <div className=" flex-col flex-nowrap w-[700px] h-[800px] ml-[35%] ">
          {/* <LoginText /> */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mt-[100px]">
            <div className="text-[36px] text-black ml-[120px]">{`User Login`}</div>
            <div class="mb-4">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker rounded-full"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 rounded-full"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded text-[20px]"
                // type="submit"
                onClick={handleSubmitLogin}
              >
                เข้าสู่ระบบ
              </button>

              <button
                className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded text-[20px]"
                onClick={() => {
                  navigation(`/usigup`, { replace: true });
                }}
              >
                SignUp
              </button>
              {/* <a
                className="inline-block align-baseline font-bold text-[20px] text-blue-400 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a> */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
