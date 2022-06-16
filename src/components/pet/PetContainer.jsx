import React from "react";
import PetCard from "./PetCard";

function PetContainer() {
  return (
    <>
      <div className="flex flex-nowrap w-[1300px] h-[1200px] bg-[#F8F8F8] justify-center ml-[20%]">
        <PetCard />
      </div>
    </>
  );
}

export default PetContainer;
