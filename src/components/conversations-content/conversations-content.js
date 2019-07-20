import React from "react";
import ConversationList from "../conversation-list/conversation-list";
import ConversationListHeader from "../conversation-list-header/conversation-list-header";
import "./conversations-content.css";

const ConversationsContent = () => {
  return (
    <div className="offset-sm-3 col-sm-6 conversations-content">
      <ConversationListHeader />
      <ConversationList />
    </div>
  );
};

export default ConversationsContent;
