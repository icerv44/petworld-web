import React from "react";
import Login from "../components/auth/Login";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/header/Header";

function LoginPage() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;
