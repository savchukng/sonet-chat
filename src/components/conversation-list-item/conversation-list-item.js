import React from "react";
import "./conversation-list-item.css";
import avatar from "../../images/avatar.png";

const ConversationListItem = ({ conversation }) => {
  const { title, lastMessage } = conversation;
  let lastMessageContainer;
  if (lastMessage) {
    lastMessageContainer = (
      <div>
        {`${lastMessage.sender}: ${lastMessage.content} `}
        <small>{`(${lastMessage.sendTime.toLocaleString()})`}</small>
      </div>
    );
  } else {
    lastMessageContainer = <small>No messages</small>;
  }
  return (
    <div className="d-flex conversation p-2">
      <img src={avatar} className="avatar" alt="avatar" />
      <div>
        <div className="font-weight-bold">{title}</div>
        <div className="d-flex">{lastMessageContainer}</div>
      </div>
    </div>
  );
};

export default ConversationListItem;
