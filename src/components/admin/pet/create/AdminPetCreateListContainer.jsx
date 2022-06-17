import React from "react";

import AdminPetButtonCreateList from "./AdminPetButtonCreateList";
import AdminPetTableCreateList from "./AdminPetTableCreateList";

function AdminPetCreateListContainer() {
  return (
    <>
      <AdminPetButtonCreateList />
      <div className="flex w-[1550px] max-w-[1900px] h-[1000px] bg-[#F7F5FF] ml-[300px] mt-[20px]">
        <AdminPetTableCreateList />
      </div>
    </>
  );
}

export default AdminPetCreateListContainer;
