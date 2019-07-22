import React, { Component } from "react";
import ConversationListItem from "../conversation-list-item/conversation-list-item";
import { connect } from "react-redux";
import WithSonetService from "../hoc/with-sonet-service";
import { fetchConversations } from "../../actions";
import Spinner from "../spinner/spinner";
import { Link } from "react-router-dom";
import "./conversation-list.css";

const ConversationList = ({ conversations }) => {
  return (
    <ul className="p-3 conversations">
      {conversations.map(conversation => {
        return (
          <li key={conversation.id}>
            <Link
              to={`${conversation.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ConversationListItem conversation={conversation} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

class ConversationListContainer extends Component {
  componentDidMount() {
    const { fetchConversations, userId } = this.props;
    fetchConversations(userId);
  }

  render() {
    const { conversations, loadingConversations } = this.props;
    if (loadingConversations) {
      return <Spinner />;
    }
    return <ConversationList conversations={conversations} />;
  }
}

const mapStateToProps = ({ conversations, loadingConversations, userId }) => {
  return { conversations, loadingConversations, userId };
};

const mapDispatchToProps = (dispatch, { sonetService }) => {
  return {
    fetchConversations: userId =>
      fetchConversations(sonetService, dispatch, userId)()
  };
};

export default WithSonetService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConversationListContainer)
);
