import React from "react";
import AdminPetEditForm from "./AdminPetEditForm";

function AdminPetEditContainer() {
  return (
    <div className="flex w-[1550px] max-w-[1900px] h-[1000px] bg-[#F7F5FF] ml-[300px] mt-[20px] justify-evenly">
      {/* <div className="text-[36px] text-black ml-[120px]">{`Create Pet`}</div> */}
      <AdminPetEditForm />
    </div>
  );
}

export default AdminPetEditContainer;
