import React from "react";
import "./message-list-item.css";
import avatar from "../../images/avatar.png";

const MessageListItem = ({ message }) => {
  const { content, sender, date } = message;
  return (
    <div className="d-flex w-100">
      <img src={avatar} className="avatar" alt="avatar" />
      <div>
        <span className="font-weight-bold">{`${sender} `}</span>
        <small>{date.toLocaleString()}</small>
        <div className="p-2 message-content">{content}</div>
      </div>
    </div>
  );
};

export default MessageListItem;
