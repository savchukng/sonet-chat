import React from "react";
import { showModal } from "../../actions";
import { connect } from "react-redux";
import CreateConversationModal from "../create-conversation-modal/create-conversation-modal";

const ConversationListHeader = ({ showModal }) => {
  return (
    <div className="p-2">
      <h3 className="col-sm-9 d-inline-block mt-3">Conversations</h3>
      <button className="col-sm-3 btn btn-secondary mb-2" onClick={showModal}>
        Create conversation
      </button>
      <CreateConversationModal />
      <hr />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch(showModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ConversationListHeader);
