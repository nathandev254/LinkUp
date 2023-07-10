import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const { username, email } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
