import React from "react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminPetEditContainer from "../components/admin/pet/update/AdminPetEditContainer";
import Footer from "../components/layout/Footer";

function DistributorEditPetPage() {
  return (
    <>
      <AdminHeader />
      <AdminPetEditContainer />
      <Footer />
    </>
  );
}

export default DistributorEditPetPage;
