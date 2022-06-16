import React from "react";

import cat12 from "../../assets/images/cat_12.jpg";

import PetDistributorName from "./PetDistributorName";
import PetPrice from "./PetPrice";
function PetCard() {
  return (
    <>
      <div className="card w-[280px] h-[450px] bg-[#F7F5FF] shadow-xl">
        <figure>
          <img className="h-[181px] w-[280px]" src={cat12} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-[14px]">{`แมว เพศเมีย`}</h3>

          <h1 className="card-title text-[16px]">{`ศุภลักษณ์(Burmese)`}</h1>
          <PetDistributorName />
          <PetPrice />
          {/* <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PetCard;
