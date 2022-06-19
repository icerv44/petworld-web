import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

import PetPage from "../pages/PetPage";
import DistributorCreateListPage from "../pages/DistributorCreateListPage";
import DistributorLoginPage from "../pages/DistributorLoginPage";
import DistributorSignUpPage from "../pages/DistributorSignUpPage";
import DistributorCreatePage from "../pages/DistributorCreatePage";
import DistributorEditPetPage from "../pages/DistributorEditPetPage";

function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="" element={<PetPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/usigup" element={<SignUpPage />} />
      <Route path="/pet" element={<PetPage />} />
      <Route path="/dislist" element={<DistributorCreateListPage />} />
      <Route path="/dislogin" element={<DistributorLoginPage />} />
      <Route path="/dissignup" element={<DistributorSignUpPage />} />
      <Route path="/discreate" element={<DistributorCreatePage />} />
      <Route path="/disedit/:id" element={<DistributorEditPetPage />} />
    </Routes>
  );
}

export default Router;
