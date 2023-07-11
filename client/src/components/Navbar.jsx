import React from "react";
import Logo from "../assets/logo.png";
import {AiOutlineSearch, AiFillMessage} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'
import {RxAvatar} from 'react-icons/rx'
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo--container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="search--container">
        <AiOutlineSearch/>
        <input type="search" name="" id="" placeholder="search" />
      </div>
      <div className="profile--container">
            <AiFillMessage/>
            <IoMdNotifications/>
            <RxAvatar/>
      </div>
    </div>
  );
}

export default Navbar;
