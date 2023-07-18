import React from "react";
import photo from "../assets/photo.jpg";
import "./Messages.css";

function Messages() {
  const dummyMessages = [
    {
      id: 1,
      name: "Nathaniel",
      content: "Hello Nythan, what are you doing?",
      time: "1h ago",
      isUserOne: true,
    },
    {
      id: 2,
      name: "You",
      content: "Hey there! How's your day going?",
      time: "2h ago",
      isUserOne: false,
    },
    {
      id: 3,
      name: "Nathaniel",
      content: "I'm just working on a new project. How about you?",
      time: "3h ago",
      isUserOne: true,
    },
    {
      id: 4,
      name: "You",
      content: "That sounds great! I'm catching up on some reading.",
      time: "4h ago",
      isUserOne: false,
    },
    {
      id: 5,
      name: "Nathaniel",
      content: "Nice! What book are you reading?",
      time: "5h ago",
      isUserOne: true,
    },
    {
      id: 6,
      name: "You",
      content: "I'm reading 'The Alchemist' by Paulo Coelho.",
      time: "6h ago",
      isUserOne: false,
    },
    {
      id: 7,
      name: "Nathaniel",
      content: "Ah, that's a classic! Enjoy the journey!",
      time: "7h ago",
      isUserOne: true,
    },
    {
      id: 8,
      name: "You",
      content: "Thanks! I will. How's the weather over there?",
      time: "8h ago",
      isUserOne: false,
    },
    {
      id: 9,
      name: "Nathaniel",
      content: "It's sunny and warm. Perfect for outdoor activities.",
      time: "9h ago",
      isUserOne: true,
    },
    {
      id: 10,
      name: "You",
      content: "That sounds lovely. I wish I could join you!",
      time: "10h ago",
      isUserOne: false,
    },
  ];

  return (
    <div className="chat">
      <div className="chat--sidebar">
        <div className="message" >
          <img src={photo} alt="" />
          <div className="message--detail">
            <span className="message--title">Nathaniel</span>
            <p className="message--content">
              That sounds lovely. I wish I could join you!
            </p>
          </div>
          <p>2hr ago</p>
        </div>
      </div>
      <div className="chat-container">
        <div className="message-list">
          {dummyMessages.map((message) => (
            <div
              className={`chat-message ${
                message.isUserOne ? "chat-message-user-one" : "chat-message-you"
              }`}
              key={message.id}
            >
              <div className="message--detail">
                <span className="message--title">{message.name}</span>
                <p className="message--content">{message.content}</p>
              </div>
              <p>{message.time}</p>
            </div>
          ))}
        </div>
        <form className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Messages;
