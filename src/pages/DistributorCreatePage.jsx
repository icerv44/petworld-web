import React from "react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminPetCreateContainer from "../components/admin/pet/create/AdminPetCreateContainer";
import Footer from "../components/layout/Footer";

function DistributorCreatePage() {
  return (
    <>
      <AdminHeader />
      <AdminPetCreateContainer />
      <Footer />
    </>
  );
}

export default DistributorCreatePage;
