import React from "react";
import "./conversation-list-item.css";
import avatar from "../../images/avatar.png";

const ConversationListItem = ({ conversation }) => {
  const { title, lastMessage } = conversation;
  return (
    <div className="d-flex conversation p-2">
      <img src={avatar} className="avatar" alt="avatar" />
      <div>
        <div className="font-weight-bold">{title}</div>
        <div className="d-flex">
          <div>
            {`${lastMessage.sender}: ${lastMessage.content} `}
            <small>{`(${lastMessage.date.toLocaleString()})`}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationListItem;
