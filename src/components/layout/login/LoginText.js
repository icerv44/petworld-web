import React from "react";

function LoginText() {
  return (
    <>
      <h1 className="flex text-[32px] h-[32px] justify-center">
        เข้าสู่ระบบ/สมัครสมาชิก
      </h1>
      <h2 className="flex text-[24px] justify-center">
        เมื่อคลิกเข้าสู่ระบบแล้ว เท่ากับว่าคุณยอมรับ
      </h2>
      <div className="flex text-[24px] justify-center">
        <a href="#" className="mr-[8px]">
          เงื่อนไขการให้บริการ
        </a>
        <p className="mr-[8px]">และ</p>
        <a href="#">นโยบายความเป็นส่วนตัว</a>
      </div>
    </>
  );
}

export default LoginText;
