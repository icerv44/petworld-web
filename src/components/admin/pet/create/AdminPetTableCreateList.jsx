import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../../../config/axios";
function AdminPetTable() {
  const [animal, setAnimal] = useState(null);
  const [id, setId] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    fetchAnimal();
  }, []);

  const fetchAnimal = async () => {
    console.log("fetchAnimal");
    try {
      const resAnimal = await axios.get("/animals/1");
      setAnimal(resAnimal.data.animal);
      console.log("animal : " + animal);
    } catch (err) {
      console.log(err);
    }
  };
  // const getAge = (bDate) => {
  //   let today = new Date();
  //   let birthDay = new Date(bDate);
  //   let age = today.getFullYear() - birthDay.getFullYear();

  //   return age;
  // };
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>ภาพ</th>
              <th>Title</th>
              <th>ชนิดสัตว์</th>
              <th>สายพันธ์</th>
              <th>เพศ</th>
              <th>ร้าน</th>
              <th>{`อายุ(เดือน)`}</th>
              <th>ราคา</th>
              <th>แอคชั่น</th>
            </tr>
          </thead>
          <tbody>
            {animal.map((pet) => (
              <tr>
                {/* // Col-1 */}
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={``} alt={pet.id} />
                      </div>
                    </div>
                  </div>
                </td>
                {/* // Col-2 */}
                <td>{pet.title}</td>
                {/* // Col-3 */}
                <td>{pet.category}</td>
                {/* // Col-4 */}
                <td>{pet.breed}</td>
                {/* // Col-5 */}
                <td>{pet.Gender}</td>
                {/* // Col-6 */}
                <td>{`ร้าน`}</td>
                {/* // Col-7 */}
                <td>{pet.BirthDate}</td>
                {/* // Col-8 */}
                <td>{pet.Price}</td>

                <th>
                  <button className="btn btn-ghost btn-xs">แอคชั่น</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPetTable;

// {animal.map((pet) => (
//   <tr>
//     {/* // Col-1 */}
//     <th>
//       <label>
//         <input type="checkbox" className="checkbox" />
//       </label>
//     </th>
//     <td>
//       <div className="flex items-center space-x-3">
//         <div className="avatar">
//           <div className="mask mask-squircle w-12 h-12">
//             <img src={``} alt={pet.id} />
//           </div>
//         </div>
//       </div>
//     </td>
//     {/* // Col-2 */}
//     <td>{pet.title}</td>
//     {/* // Col-3 */}
//     <td>{pet.category}</td>
//     {/* // Col-4 */}
//     <td>{pet.breed}</td>
//     {/* // Col-5 */}
//     <td>{pet.Gender}</td>
//     {/* // Col-6 */}
//     <td>{`ร้าน`}</td>
//     {/* // Col-7 */}
//     <td>{pet.BirthDate}</td>
//     {/* // Col-8 */}
//     <td>{pet.Price}</td>

//     <th>
//       <button className="btn btn-ghost btn-xs">แอคชั่น</button>
//     </th>
//   </tr>
// ))}
