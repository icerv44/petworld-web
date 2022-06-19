import { useState, useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { ErrorContext } from "../../../../contexts/ErrorContext";
import axios from "../../../../config/axios";
import { Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminPetCreateForm() {
  const [category, setCategory] = useState("");
  const [breed, setBreed] = useState("");
  const [BirthDate, setBirthDate] = useState("");
  const [Gender, setGender] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [Price, setPrice] = useState("");
  const [Picture, setPicture] = useState([]);
  const [IsActive, setIsActive] = useState("1");

  const [ShippingPrice, setShippingPrice] = useState("");
  const [ShippingName, setShippingName] = useState("");
  const [distributorId, setDistributorId] = useState("");

  // const { createAnimal } = useContext(AuthContext);
  const { setError, setTrigger } = useContext(ErrorContext);

  const navigation = useNavigate();

  const createAnimal = async (input) => {
    console.log("input : ", input);
    const res = await axios.post("/animals/createAnimal", input);
    console.log("Res : ", res);
  };

  const handleSubmitCreate = async (e) => {
    console.log("handleSubmitCreate");
    try {
      e.preventDefault();
      // validate input first

      console.log({
        category,
        breed,
        BirthDate,
        Gender,
        title,
        detail,
        Price,
        ShippingPrice,
        ShippingName,
      });

      // end validate
      await createAnimal({
        category,
        breed,
        BirthDate,
        Gender,
        Price,
        ShippingPrice,
        IsActive,
        ShippingName,
        title,
        detail,
      });
      alert("Create Success");
      navigation(`/dislist`, { replace: true });
    } catch (err) {
      alert("Create Fail");
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className=" flex-col  w-[500px] h-[800px] ">
        {/* <LoginText /> */}

        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-wrap grid-cols-2 mt-[20px]"
          // onSubmit={handleSubmitSignUp}
        >
          <div class="mb-6">
            <label className="block text-grey-darker text-[24px] font-bold mb-2">
              {`ชื่อโพสสัตว์เลี้ยง`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="ชื่อโพสสัตว์เลี้ยง"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-[24px] font-bold mb-2">
              {`ชนิดสัตว์`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="ค้นหาจากรายชื่อชนิดสัตว์"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-[24px] font-bold mb-2">
              {`สายพันธ์`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="ค้นหาจากรายชื่อสายพันธ์"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-[24px] font-bold mb-2">
              {`เพศ`}
            </label>
            <select
              className="select-md shadow appearance-none border border-red rounded w-[300px] text-grey-darker mb-3 rounded-full"
              value={Gender}
              onChange={(e) => {
                setGender(e.target.value);
                // console.log("gender :" + e.target.value);
              }}
            >
              <option disabled selected>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>None</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="lastNameTH"
            >
              {`วัน เกิดของน้อง`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="date"
              placeholder="เลือก"
              value={BirthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-[24px] font-bold mb-2"
              for="lastNameTH"
            >
              {`รายละเอียดสัตว์เลี้ยง`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="รายละเอียดสัตว์เลี้ยง"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className=" flex-col  w-[500px] h-[800px] ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-wrap grid-cols-2 mt-[20px]"
          // onSubmit={handleSubmitSignUp}
        >
          <div className="mb-6">
            <label className="block text-grey-darker text-[24px] font-bold mb-2">
              {`ราคา สัตว์เลี้ยง(บาท)*`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="ราคา (ตัวเลขเท่านั้น)"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-[24px] font-bold mb-2">
              {`ราคา ขนส่ง (บาท)*`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="ราคา (ตัวเลขเท่านั้น)"
              value={ShippingPrice}
              onChange={(e) => setShippingPrice(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-[24px] font-bold mb-2">
              {`เลือก ขนส่ง*`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="ราคา (ตัวเลขเท่านั้น)"
              value={ShippingName}
              onChange={(e) => setShippingName(e.target.value)}
            />
          </div>

          {/* <div className="mb-6">
            <label className="block text-grey-darker text-[24px] font-bold mb-2">
              {`เลือก ขนส่ง*`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="ราคา (ตัวเลขเท่านั้น)"
              value={ShippingName}
              onChange={(e) => setShippingName(e.target.value)}
            />
          </div> */}
        </form>

        <button
          class="btn bg-[#735FE7] rounded-lg w-[120px] h-[30px]"
          onClick={handleSubmitCreate}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          บันทึก
        </button>
      </div>
    </>
  );
}

export default AdminPetCreateForm;
