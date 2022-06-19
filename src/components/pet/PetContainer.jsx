import React, { useState, useEffect } from "react";
import PetCard from "./PetCard";
import axios from "../../config/axios";

function PetContainer() {
  const [animal, setAnimal] = useState([]);

  const fetchAnimal = async () => {
    console.log("fetchAnimal");
    try {
      const resAnimal = await axios.get("/animals");
      setAnimal(resAnimal.data.animal);
      console.log("animal : ", resAnimal);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAnimal();
  }, []);

  return (
    <>
      <div className="text-[36px] font-bold ml-[50%] py-[30px]">
        {" "}
        {`Pet List`}
      </div>
      <div className="flex flex-wrap w-[1300px]  bg-[#F8F8F8] justify-between justify-start ml-[20%] px-[20px]">
        {animal.map((pet) => (
          <PetCard key={pet.id} animal={pet} fetchData={fetchAnimal} />
        ))}
      </div>
    </>
  );
}

export default PetContainer;
