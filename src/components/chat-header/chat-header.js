import React from "react";
import withSonetService from "../hoc/with-sonet-service";
import "./chat-header.css";

const ChatHeader = ({ id, sonetService }) => {
  const { title } = sonetService.getConversation(id);
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center pt-3">
        <h5>{title}</h5>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default withSonetService()(ChatHeader);
