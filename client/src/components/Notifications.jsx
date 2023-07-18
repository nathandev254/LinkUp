import React from "react";
import "./Notification.css";

function Notifications() {
  const dummyNotifications = [
    {
      id: 1,
      text: 'John Doe liked your post.',
      time: '5 minutes ago',
      type: 'like'
    },
    {
      id: 2,
      text: 'Jane Smith commented on your photo.',
      time: '1 hour ago',
      type: 'comment'
    },
    {
      id: 3,
      text: 'Alex Johnson started following you.',
      time: '2 hours ago',
      type: 'follow'
    },
    {
      id: 4,
      text: 'Lisa White mentioned you in a comment.',
      time: '3 hours ago',
      type: 'comment'
    },
    {
      id: 5,
      text: 'David Brown liked your post.',
      time: '4 hours ago',
      type: 'like'
    },
    {
      id: 6,
      text: 'Sarah Johnson started following you.',
      time: '5 hours ago',
      type: 'follow'
    },
    {
      id: 7,
      text: 'James Smith commented on your photo.',
      time: '6 hours ago',
      type: 'comment'
    },
  ];

  return (
    <div className="container">
      <h1 className="notification">Notifications</h1>
      <ul className="notification-list">
        {dummyNotifications.map((notification) => (
          <li key={notification.id}>
            <div className="notification-item">
              <div className="notification-icon"></div>
              <div className="notification-content">
                <p className="notification-text">{notification.text}</p>
                <p className="notification-time">{notification.time}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
