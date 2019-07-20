import React from "react";
import MessageList from "../message-list/message-list";
import MessageInputBox from "../message-input-box/message-input-box";
import ChatHeader from "../chat-header/chat-header";
import "./chat-content.css";

const ChatContent = ({ id }) => {
  return (
    <div className="offset-sm-3 col-sm-6 chat-content">
      <ChatHeader id={id} />
      <MessageList id={id} />
      <MessageInputBox id={id} />
    </div>
  );
};

export default ChatContent;
