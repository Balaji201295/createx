import React from "react";
import { Outlet } from "react-router-dom";
import { Copyright, Navbar } from "./components";
import { Footer } from "./containers";
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
};
export default App;
