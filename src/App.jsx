import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HeaderScreen from "./screens/header/HeaderScreen.jsx";

function App() {
  return (
    <div>
      <HeaderScreen />
      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default App;
