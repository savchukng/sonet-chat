const initialState = {
  userId: 1,
  conversations: [],
  messages: [],
  friends: [],
  loadingConversations: true,
  loadingMessages: true,
  loadingFriends: true,
  messageLabel: "",
  conversationNameLabel: "",
  searchFriendsLabel: "",
  showModal: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONVERSATIONS_REQUEST":
      return {
        ...state,
        conversations: [],
        loadingConversations: true
      };
    case "FETCH_CONVERSATIONS_SUCCESS":
      return {
        ...state,
        conversations: action.payload,
        loadingConversations: false
      };
    case "FETCH_MESSAGES_REQUEST":
      return {
        ...state,
        messages: [],
        loadingMessages: true
      };
    case "FETCH_MESSAGES_SUCCESS":
      return {
        ...state,
        messages: action.payload,
        loadingMessages: false
      };
    case "FETCH_FRIENDS_REQUEST":
      return {
        ...state,
        friends: [],
        loadingFriends: true
      };
    case "FETCH_FRIENDS_SUCCESS":
      return {
        ...state,
        friends: action.payload,
        loadingFriends: false
      };
    case "MESSAGE_ADDED":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Math.random() * 1000,
            content: action.payload.content,
            sender: action.payload.sender,
            sendTime: action.payload.sendTime
          }
        ]
      };
    case "MESSAGE_INPUT_CHANGE":
      return {
        ...state,
        messageLabel: action.payload
      };
    case "CONVERSATION_NAME_INPUT_CHANGE":
      return {
        ...state,
        conversationNameLabel: action.payload
      };
    case "SEARCH_FRIENDS_INPUT_CHANGE":
      return {
        ...state,
        searchFriendsLabel: action.payload
      };

    case "MESSAGE_INPUT_CLEAR":
      return {
        ...state,
        messageLabel: ""
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModal: true
      };
    case "HIDE_MODAL":
      return {
        ...state,
        showModal: false
      };
    case "TOGGLE_CHECK_FRIEND":
      const changedFriends = state.friends.map(friend =>
        friend.id === action.payload.id
          ? { ...friend, checked: !friend.checked }
          : friend
      );
      return {
        ...state,
        friends: changedFriends
      };
    default:
      return state;
  }
};

export default reducer;
