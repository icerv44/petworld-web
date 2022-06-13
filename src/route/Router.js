import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Router() {
  const { user } = useContext(AuthContext);
  return <Routes></Routes>;
}

export default Router;
