import React from "react";
import photo from "../assets/photo.jpg";
import "./Messages.css";

function Messages() {
  return (
    <div className="chat">
      <div className="chat--sidebar">
        <div className="message">
          <img src={photo} alt="" />
          <div className="message--detail">
            <span className="message--title">Nathaniel</span>
            <p className="message--content">Hello Nythan what are you doing</p>
          </div>
          <p>1h ago</p>
        </div>
      </div>
      <div className="chat-container">
        <div className="message-list">  
        </div>
        <form className="chat-input" >
          <input
            type="text"
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Messages;
