import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

import PetPage from "../pages/PetPage";

function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/usigup" element={<SignUpPage />} />
      <Route path="/pet" element={<PetPage />} />
    </Routes>
  );
}

export default Router;
