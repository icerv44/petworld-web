import { useState } from "react";

function AdminPetCreateForm() {
  const [Category, setCategory] = useState("");
  const [Breed, setBreed] = useState("");
  const [BirthDate, setBirthDate] = useState("");
  const [Gender, setGender] = useState("");
  const [Title, setTitle] = useState("");
  const [Detail, setDetail] = useState("");
  const [Price, setPrice] = useState("");
  const [Picture, setPicture] = useState([]);

  const [ShippingPrice, setShippingPrice] = useState("");
  const [ShippingName, setShippingName] = useState("");
  const [Distributor_ID, setDistributor_ID] = useState("");

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
              value={Title}
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
              value={Category}
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
              value={Breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-[24px] font-bold mb-2">
              {`เพศ`}
            </label>
            <input
              className="shadow appearance-none border border-red rounded input-md w-[300px] text-grey-darker mb-3 rounded-full"
              type="text"
              placeholder="ค้นหาเพศ"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            />
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
              value={Detail}
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
        </form>
      </div>
    </>
  );
}

export default AdminPetCreateForm;
