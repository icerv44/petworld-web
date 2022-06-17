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

function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/usigup" element={<SignUpPage />} />
      <Route path="/pet" element={<PetPage />} />
      <Route path="/dislist" element={<DistributorCreateListPage />} />
      <Route path="/dislogin" element={<DistributorLoginPage />} />
      <Route path="/dissignup" element={<DistributorSignUpPage />} />
      <Route path="/discreate" element={<DistributorCreatePage />} />
    </Routes>
  );
}

export default Router;
