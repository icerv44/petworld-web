import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";
import Sidebar from "../components/layout/sidebar/Sidebar";
import HomePage from "../pages/HomePage";
function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
     
    </Routes>
  );
}

export default Router;
