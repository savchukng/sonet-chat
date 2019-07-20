import React from "react";
import { conversationNameInputChange } from "../../actions";
import { connect } from "react-redux";

const ConversationNameInput = ({ conversationNameLabel, onLabelChange }) => {
  return (
    <div className="p-2">
      <input
        className="w-100 p-1 form-control"
        value={conversationNameLabel}
        type="text"
        onChange={event => onLabelChange(event.target.value)}
        placeholder="Conversation name"
      />
    </div>
  );
};

const mapStateToProps = ({ conversationNameLabel }) => {
  return { conversationNameLabel };
};

const mapDispatchToProps = dispatch => {
  return {
    onLabelChange: symbol => dispatch(conversationNameInputChange(symbol))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationNameInput);
