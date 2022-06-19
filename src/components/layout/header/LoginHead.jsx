import React from "react";
import { useNavigate } from "react-router-dom";
function LoginHead() {
  const navigation = useNavigate();
  return (
    <>
      <div className="w-full ">
        <button
          className="bg-[#FEBF23] w-[241px] h-[50px] ml-[1000px] mt-[20px] rounded-full"
          onClick={() => {
            navigation(`/login`, { replace: true });
          }}
        >
          เข้าสู่ระบบ/สมัครสมาชิก <br />
          User
        </button>
      </div>
    </>
  );
}

export default LoginHead;
