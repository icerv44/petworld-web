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
      console.log("animal : " + animal);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAnimal();
  }, []);

  return (
    <>
      <div className="flex flex-nowrap w-[1300px] h-[1200px] bg-[#F8F8F8] justify-center ml-[20%]">
        {animal.map((pet) => (
          <PetCard key={pet.id} animal={pet} fetchData={fetchAnimal} />
        ))}
      </div>
    </>
  );
}

export default PetContainer;
