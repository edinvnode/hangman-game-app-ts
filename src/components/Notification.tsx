import React from "react";

interface ShowNotificaiton {
  showNotification: boolean;
}

const Notification = ({ showNotification }: ShowNotificaiton) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
