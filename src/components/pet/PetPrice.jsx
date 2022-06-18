import React from "react";

function PetPrice({ peice }) {
  return (
    <>
      <div className="h-[60px] w-[210px] bg-[#ffff] rounded-lg">
        <div className="text-[24px] items-center">
          <h1 className="py-2 px-16 font-bold"> {`฿ ${peice}`}</h1>
        </div>
      </div>
    </>
  );
}

export default PetPrice;
