import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HeaderScreen from "./screens/header/HeaderScreen.jsx";

function App() {
  return (
    <>
      <HeaderScreen />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
