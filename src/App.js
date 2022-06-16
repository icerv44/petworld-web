import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/header/Header";
import Promote from "./components/layout/promote/Promote";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Router from "./route/Router";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
