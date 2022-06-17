import React from "react";

import AdminPetButtonCreate from "./AdminPetButtonCreate";
import AdminPetCreateForm from "./AdminPetCreateForm";

function AdminPetCreateContainer() {
  return (
    <>
      <AdminPetButtonCreate />
      <div className="flex w-[1550px] max-w-[1900px] h-[1000px] bg-[#F7F5FF] ml-[300px] mt-[20px] justify-evenly">
        {/* <div className="text-[36px] text-black ml-[120px]">{`Create Pet`}</div> */}
        <AdminPetCreateForm />
      </div>
    </>
  );
}

export default AdminPetCreateContainer;
