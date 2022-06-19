import React from "react";
import { useNavigate } from "react-router-dom";

function LoginAdminHead() {
  const navigation = useNavigate();
  return (
    <>
      <div className="w-full ">
        <button
          className="bg-[#FEBF23] w-[241px] h-[50px] ml-[50px] mt-[20px] rounded-full"
          onClick={() => {
            navigation(`/dislogin`, { replace: true });
          }}
        >
          เข้าสู่ระบบ/สมัครสมาชิก <br />
          Admin
        </button>
      </div>
    </>
  );
}

export default LoginAdminHead;
