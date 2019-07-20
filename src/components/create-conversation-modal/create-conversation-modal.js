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
  fetchConversations
}) => {
  const showHideClassName =
    "form-group modal display-" + (showModal ? "block" : "none");
  const onCreate = () => {
    sonetService.createConversation();
    hideModal();
    fetchConversations();
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

const mapStateToProps = ({ showModal }) => {
  return {
    showModal
  };
};

const mapDispatchToProps = (dispatch, { sonetService }) => {
  return {
    fetchConversations: fetchConversations(sonetService, dispatch),
    hideModal: () => dispatch(hideModal())
  };
};

export default withSonetService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateConversationModal)
);
