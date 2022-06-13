import React from "react";
import DropDown from "./DropDown";
import Login from "./LoginHead";
import Logo from "./Logo";

function Header() {
  return (
    <>
      <div className="w-full h-[80px] max-w-screen-xl max-h-[100px] min-w-[390px] min-h-[58px] flex bg-[#735FE7] block">
        <Logo />
        <DropDown />
        <Login />
      </div>

      {/* <div className="bg-green-800 w-auto flex flex-wrap">
        <div className="w-[300px] h-[80px] bg-red-800 flex-1">Red</div>
        <div className="w-[300px] h-[80px] bg-blue-800 flex-1">Red</div>
        <div className="w-[300px] h-[80px] bg-green-800 flex-1">Red</div>
        <div className=" h-[80px] bg-red-600 flex-1">Red</div>
      </div> */}
      {/* <div className="bg-green-800 w-auto grid grid-cols-2 gap-2">
        <div className=" h-[80px] bg-red-800 flex-1 text-red-500">Red</div>
        <div className=" h-[80px] bg-blue-800 flex-1">Red</div>
        <div className=" h-[80px] bg-[#735FE7] flex-1">Red</div>
        <div className=" h-[80px] bg-red-600 flex-1">
          <button>ABC</button>
        </div>
      </div> */}
    </>
  );
}

export default Header;
