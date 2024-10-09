import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";

function App() {
  return (
    <div>
      {/* header */}
      <ToastContainer />
      <Outlet />
      {/* footing */}
    </div>
  );
}

export default App;
