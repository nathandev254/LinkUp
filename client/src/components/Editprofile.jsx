import React from "react";
import photo from "../assets/photo.jpg";
import "./Editprofile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile--edit">
        <div className="photo--edit">
          <div className="photo--container">
            <img src={photo} alt="" />
          </div>
          <span>Nathaniel warimwe</span>
        </div>
        <div className="profile--details">
          <input type="text" placeholder="firstname" />
          <input type="text" placeholder="lastname" />
          <input type="email" placeholder="email" />
          <input type="text" placeholder="Phonenumber" />
          <input type="text" placeholder="location" />
          <input type="text" placeholder="address" />
        </div>
        <button className="edit-btn">save</button>
      </div>
    </div>
  );
}

export default Profile;
