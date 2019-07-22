import React from "react";
import { hideModal, fetchConversations } from "../../actions";
import { connect } from "react-redux";
import withSonetService from "../hoc/with-sonet-service";
import FriendList from "../friend-list/friend-list";
import ConversationNameInput from "../conversation-name-input/conversation-name-input";
import SearchFriendsBox from "../search-friends-box/search-friends-box";
import "./create-conversation-modal.css";

const CreateConversationModal = ({
  showModal,
  hideModal,
  sonetService,
  fetchConversations,
  conversationNameLabel,
  friends,
  userId
}) => {
  const showHideClassName =
    "form-group modal display-" + (showModal ? "block" : "none");
  const onCreate = () => {
    let checkedFriends = [];
    friends.forEach(friend => {
      checkedFriends.push(friend.id);
    });
    sonetService.createConversation(
      {
        conversationNameLabel,
        checkedFriends
      },
      userId
    );
    hideModal();
    fetchConversations(userId);
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <SearchFriendsBox />
        <FriendList />
        <ConversationNameInput />
        <div className="m-2 text-right">
          <button className="col-sm-3 btn mr-2 btn-dark" onClick={onCreate}>
            Create
          </button>
          <button className="col-sm-3 btn btn-dark" onClick={hideModal}>
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({
  showModal,
  conversationNameLabel,
  friends,
  userId
}) => {
  return {
    showModal,
    conversationNameLabel,
    friends,
    userId
  };
};

const mapDispatchToProps = (dispatch, { sonetService }) => {
  return {
    fetchConversations: userId =>
      fetchConversations(sonetService, dispatch, userId)(),
    hideModal: () => dispatch(hideModal())
  };
};

export default withSonetService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateConversationModal)
);
