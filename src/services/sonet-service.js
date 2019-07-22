import SockJS from "sockjs-client";
import Stomp from "stompjs";

class SonetService {
  BASE_URL = "http://localhost:8081/api";
  socket;
  stompClient;

  data = [
    {
      id: 1,
      title: "User Userenko",
      lastMessage: {
        id: 1,
        content: "First message",
        sender: "Mark",
        sendTime: new Date()
      }
    },
    {
      id: 2,
      title: "Top Besida",
      lastMessage: {
        id: 2,
        content: "Second message",
        sender: "Mark",
        sendTime: new Date()
      }
    }
  ];
  messages = [
    { id: 1, content: "First message", sender: "Mark", sendTime: new Date() },
    { id: 2, content: "Second message", sender: "Mark", sendTime: new Date() }
  ];

  friends = [
    { id: 1, firstName: "User", lastName: "Userenko", checked: false },
    { id: 2, firstName: "User2", lastName: "Userenko2", checked: false }
  ];

  socketConnect() {
    this.socket = new SockJS(`${this.BASE_URL}/ws`);
    this.stompClient = Stomp.over(this.socket);
  }

  socketSubscribe(id, subscribeAction) {
    const stompClient = this.stompClient;
    stompClient.connect({}, () => {
      stompClient.subscribe(`/topic/${id}`, message => {
        subscribeAction(
          JSON.parse(message.body).content,
          JSON.parse(message.body).sender,
          new Date(JSON.parse(message.body).sendTime)
        );
      });
    });
  }

  socketSend(id, message, senderId) {
    this.stompClient.send(
      `/app/message/${id}`,
      {},
      JSON.stringify({ content: message, senderId })
    );
  }

  socketDisconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }

  getConversations(id) {
    return fetch(`${this.BASE_URL}/api/user/${id}/conversations`)
      .then(response => response.json())
      .then(data => data);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }

  getFriends(id) {
    return fetch(`${this.BASE_URL}/api/user/${id}/following`)
      .then(response => response.json())
      .then(data => data);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.friends);
      }, 700);
    });
  }

  getMessages(id) {
    return fetch(`${this.BASE_URL}/api/chats/${id}/messages`)
      .then(response => response.json())
      .then(messages => messages);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.messages);
      }, 700);
    });
  }

  getConversation(id) {
    return {
      id,
      title: id < 2 ? "User Userenko" : "Top Besida",
      lastMessage: "hello"
    };
  }

  createConversation(conversation, creatorId) {
    fetch(`${this.BASE_URL}/api/chats/create`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...conversation, creatorId })
    });
  }
}

export default SonetService;
