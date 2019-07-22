import React, { Component } from "react";
import withSonetService from "../hoc/with-sonet-service";
import { fetchConversations } from "../../actions";
import { connect } from "react-redux";
import "./chat-header.css";

class ChatHeader extends Component {
  componentDidMount() {
    const { fetchConversations, userId } = this.props;
    fetchConversations(userId);
  }

  getConversationName = () => {
    const { conversations, id } = this.props;
    let result;
    if (conversations.length > 0) {
      conversations.forEach(conversation => {
        console.log(conversation.id);
        if (conversation.id == id) {
          result = conversation.title;
        }
      });
    } else {
      result = " ";
    }
    return result;
  };

  render() {
    const { sonetService, id } = this.props;
    const title = this.getConversationName();
    console.log(title);
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center pt-3">
          <h5>{title}</h5>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ conversations, userId }) => {
  return { conversations, userId };
};

const mapDispatchToProps = (dispatch, { sonetService }) => {
  return {
    fetchConversations: userId =>
      fetchConversations(sonetService, dispatch, userId)()
  };
};

export default withSonetService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatHeader)
);
