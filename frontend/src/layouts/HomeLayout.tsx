import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <section className="bg-primary w-full min-h-screen h-full">
      <header className="fixed z-30 w-full">
        <Navbar />
      </header>
      <main className="pt-16 w-full h-full">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default HomeLayout;
