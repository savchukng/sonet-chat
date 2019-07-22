import React from "react";
import { messageInputChange, messageInputClear } from "../../actions";
import { connect } from "react-redux";
import WithSonetService from "../hoc/with-sonet-service";

const MessageInputBox = ({
  messageLabel,
  messageInputChange,
  messageInputClear,
  sonetService,
  id,
  userId
}) => {
  const onSendMessage = event => {
    event.preventDefault();
    if (messageLabel.trim() !== "") {
      sonetService.socketSend(id, messageLabel.trim(), userId);
      messageInputClear();
    }
  };
  return (
    <div className="p-3">
      <form onSubmit={onSendMessage}>
        <input
          className="col-sm-10 d-inline-block form-control"
          type="text"
          value={messageLabel}
          onChange={event => messageInputChange(event.target.value)}
        />
        <input
          className="col-sm-2 btn btn-secondary float-right"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

const mapStateToProps = ({ messageLabel, userId }) => {
  return { messageLabel, userId };
};

const mapDispatchToProps = dispatch => {
  return {
    messageInputChange: symbol => dispatch(messageInputChange(symbol)),
    messageInputClear: () => dispatch(messageInputClear())
  };
};

export default WithSonetService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageInputBox)
);
