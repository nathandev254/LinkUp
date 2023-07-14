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
      <div style={{ display: "flex", minHeight: "90vh" }}>
        <Sidebar />
        <Outlet />
        {/* <div>suggested</div> */}
      </div>
    </div>
  );
}

export default Home;
