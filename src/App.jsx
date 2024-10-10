import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// components
import HomeScreen from "./screens/HomeScreen/HomeScreen";

// import "./App.css";

function App() {
  return (
    <div>
      <HomeScreen />
      <ToastContainer />
      <Outlet />
      {/* footing */}
    </div>
  );
}

export default App;
