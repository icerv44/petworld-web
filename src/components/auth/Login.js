import React from "react";
import Header from "../layout/header/Header";
import LoginText from "../layout/login/LoginText";

function Login() {
  return (
    <>
      <div className="flex w-full h-[747px] bg-[#F8F8F8] ">
        <div className=" flex-col flex-nowrap w-[700px] h-[800px] ml-[35%] ">
          {/* <LoginText /> */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mt-[100px]">
            <div class="mb-4">
              <label
                className="block text-grey-darker text-[24px] font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker rounded-full"
                id="username"
                type="text"
                placeholder="Username"
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
                id="password"
                type="password"
                placeholder="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded text-[20px]"
                type="button"
              >
                เข้าสู่ระบบ
              </button>
              <a
                className="inline-block align-baseline font-bold text-[20px] text-blue-400 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
