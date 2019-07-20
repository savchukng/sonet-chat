import React, { Component } from "react";

import MessageListItem from "../message-list-item/message-list-item";
import { fetchMessages, messageAdded } from "../../actions";

import { connect } from "react-redux";
import WithSonetService from "../hoc/with-sonet-service";

import Spinner from "../spinner/spinner";

import "./message-list.css";

class MessageList extends Component {
  messagesEndRef = React.createRef();

  componentDidMount() {
    const { fetchMessages, addMessage, sonetService, id } = this.props;
    fetchMessages();
    sonetService.socketConnect();
    sonetService.socketSubscribe(id, (content, sender, date) => {
      addMessage(content, sender, date);
    });
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    if (this.messagesEndRef.current !== null) {
      this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    const { messages, loadingMessages } = this.props;
    if (loadingMessages) {
      return <Spinner />;
    }
    return (
      <ul className="list-unstyled messages">
        {messages.map(message => {
          return (
            <li className="p-2 m-2" key={message.id}>
              <MessageListItem message={message} />
            </li>
          );
        })}
        <div ref={this.messagesEndRef} />
      </ul>
    );
  }
}

const mapStateToProps = ({ messages, loadingMessages }) => {
  return { messages, loadingMessages };
};

const mapDispatchToProps = (dispatch, { sonetService }) => {
  return {
    fetchMessages: fetchMessages(sonetService, dispatch),
    addMessage: (content, sender, date) =>
      dispatch(messageAdded(content, sender, date))
  };
};

export default WithSonetService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageList)
);
