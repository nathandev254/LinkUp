import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/home" className="link">
            <AiFillHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to='/notifications' className="link">
            <IoMdNotifications />
            <span>Notification</span>
          </Link>
        </li>
        <li>
          <Link to="/inbox" className="link">
            <TiMessages />
            <span>Messages</span>
          </Link>
        </li>
        <li>
          <Link to='/bookmark' className="link">
            <BsFillBookmarkFill />
            <span>Bookmark</span>
          </Link>
        </li>
        <li>
          <Link className="link">
            <MdGroups2 />
            <span>Groups</span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="link">
            <BsPersonFill />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
