import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="m-0 p-0 font-sans">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
