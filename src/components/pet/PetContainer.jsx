import React from "react";
import PetCard from "./PetCard";

function PetContainer() {
  const [animal, setAnimal] = useState([]);

  const fetchData = async () => {
    try {
      await fetchUser(pathname);
      setAnimal(res.data.animals);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-nowrap w-[1300px] h-[1200px] bg-[#F8F8F8] justify-center ml-[20%]">
        {animal.map((el) => (
          <PetCard key={el.id} animal={el} fetchData={fetchData} />
        ))}
      </div>
    </>
  );
}

export default PetContainer;
