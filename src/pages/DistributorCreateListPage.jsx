import React from "react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminPetCreateListContainer from "../components/admin/pet/create/AdminPetCreateListContainer";
import Footer from "../components/layout/Footer";

function DistributorCreateListPage() {
  return (
    <>
      <AdminHeader />
      <AdminPetCreateListContainer />
      <Footer />
    </>
  );
}

export default DistributorCreateListPage;
