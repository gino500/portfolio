import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";

function App() {
  const checkApp = "App Working";
  return (
    <div>
      <div>{checkApp}</div>
      {/* header */}
      <ToastContainer />
      <Outlet />
      {/* footing */}
    </div>
  );
}

export default App;
