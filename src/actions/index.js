const conversationsLoaded = newConversations => {
  return {
    type: "FETCH_CONVERSATIONS_SUCCESS",
    payload: newConversations
  };
};

const conversationsRequested = () => {
  return {
    type: "FETCH_CONVERSATIONS_REQUEST"
  };
};

const friendsLoaded = newConversations => {
  return {
    type: "FETCH_FRIENDS_SUCCESS",
    payload: newConversations
  };
};

const friendsRequested = () => {
  return {
    type: "FETCH_FRIENDS_REQUEST"
  };
};

const messagesLoaded = newMessages => {
  return {
    type: "FETCH_MESSAGES_SUCCESS",
    payload: newMessages
  };
};

const messagesRequested = () => {
  return {
    type: "FETCH_MESSAGES_REQUEST"
  };
};

const messageAdded = (content, sender, sendTime) => {
  return {
    type: "MESSAGE_ADDED",
    payload: { content, sender, sendTime }
  };
};

const messageInputChange = symbol => {
  return {
    type: "MESSAGE_INPUT_CHANGE",
    payload: symbol
  };
};

const conversationNameInputChange = symbol => {
  return {
    type: "CONVERSATION_NAME_INPUT_CHANGE",
    payload: symbol
  };
};

const searchFriendsInputChange = symbol => {
  return {
    type: "SEARCH_FRIENDS_INPUT_CHANGE",
    payload: symbol
  };
};

const toggleCheckFriend = friend => {
  return {
    type: "TOGGLE_CHECK_FRIEND",
    payload: friend
  };
};

const messageInputClear = () => {
  return {
    type: "MESSAGE_INPUT_CLEAR"
  };
};

const showModal = () => {
  return {
    type: "SHOW_MODAL"
  };
};

const hideModal = () => {
  return {
    type: "HIDE_MODAL"
  };
};

const fetchConversations = (sonetService, dispatch, userId) => () => {
  dispatch(conversationsRequested());
  sonetService
    .getConversations(userId)
    .then(data => dispatch(conversationsLoaded(data)));
};

const fetchFriends = (sonetService, dispatch, userId) => () => {
  dispatch(friendsRequested());
  sonetService.getFriends(userId).then(data => dispatch(friendsLoaded(data)));
};

const fetchMessages = (sonetService, id, dispatch) => () => {
  dispatch(messagesRequested());
  sonetService.getMessages(id).then(data => dispatch(messagesLoaded(data)));
};

export {
  fetchConversations,
  fetchMessages,
  fetchFriends,
  messageAdded,
  messageInputChange,
  messageInputClear,
  conversationNameInputChange,
  searchFriendsInputChange,
  toggleCheckFriend,
  showModal,
  hideModal
};
