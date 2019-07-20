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

const messageAdded = (content, sender, date) => {
  return {
    type: "MESSAGE_ADDED",
    payload: { content, sender, date }
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

const fetchConversations = (sonetService, dispatch) => () => {
  dispatch(conversationsRequested());
  sonetService
    .getConversations()
    .then(data => dispatch(conversationsLoaded(data)));
};

const fetchFriends = (sonetService, dispatch) => () => {
  dispatch(friendsRequested());
  sonetService.getFriends().then(data => dispatch(friendsLoaded(data)));
};

const fetchMessages = (sonetService, dispatch) => () => {
  dispatch(messagesRequested());
  sonetService.getMessages().then(data => dispatch(messagesLoaded(data)));
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
