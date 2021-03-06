import { Avatar } from "@material-ui/core";
import React from "react";
import "./message.css";

function Message({ user, message, timestamp }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message_info">
        <h4>
          {user.displayName}{" "}
          <span className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}
export default Message;
