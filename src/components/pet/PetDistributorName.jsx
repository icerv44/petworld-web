import React from "react";
import catCartoon from "../../assets/images/cartoon_1.jpg";

function PetDistributorName() {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4 h-[60px] w-[210px] bg-[#ffff] rounded-lg">
        <div className="row-span-3 ">
          <img className="w-[45px] h-[55px]" src={catCartoon} />
        </div>
        <div className="col-span-1 text-bold  ">{`ร้าน PetShop 1 `}</div>
        <div className="row-span-2 ">
          <div className="rating rating-xs ">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400  mt-[5px]"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400  mt-[5px]"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400  mt-[5px]"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400  mt-[5px]"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400  mt-[5px]"
            />
            <div className="ml-[10px]">
              <h1 className=" text-[18px]">{`2.0`}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PetDistributorName;
