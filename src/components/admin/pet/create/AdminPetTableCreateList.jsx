import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../../../config/axios";
import Router from "../../../../route/Router";
import { useNavigate } from "react-router-dom";

function AdminPetTable() {
  const [animal, setAnimal] = useState([]);
  const [id, setId] = useState(0);

  const navigation = useNavigate();

  useEffect(() => {
    console.log("useEffect");
    fetchAnimal();
  }, []);

  const fetchAnimal = async (e) => {
    console.log("fetchAnimal");
    try {
      // e.preventDefault();
      const resAnimal = await axios.get("/animals");
      setAnimal(resAnimal.data.animal);
      console.log("animal fetchAnimal : " + animal);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAnimal = async (id) => {
    try {
      const deleteAni = await axios.delete(`/animals/deleteAnimal/${id}`);
      fetchAnimal();
      // window.location.reload();
      // navigation(`/dislist`, { replace: true });
      alert("Delete Success");
    } catch (err) {
      alert("Delete Unsuccess");
    }
  };

  // const handleEdit = (id) => {
  //   history.push(`/disedit/${id}`);
  // };

  console.log("animal : " + animal);
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
                  <button
                    className="btn btn-outline btn-primary btn-xs mr-[6px]"
                    onClick={() => {
                      navigation(`/disedit/${pet.id}`, { replace: true });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline btn-primary btn-xs"
                    onClick={() => {
                      deleteAnimal(pet.id);
                    }}
                  >
                    Delete
                  </button>
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
