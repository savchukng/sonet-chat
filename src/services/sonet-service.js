import SockJS from "sockjs-client";
import Stomp from "stompjs";

class SonetService {
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
        date: new Date()
      }
    },
    {
      id: 2,
      title: "Top Besida",
      lastMessage: {
        id: 2,
        content: "Second message",
        sender: "Mark",
        date: new Date()
      }
    }
  ];
  messages = [
    { id: 1, content: "First message", sender: "Mark", date: new Date() },
    { id: 2, content: "Second message", sender: "Mark", date: new Date() }
  ];

  friends = [
    { id: 1, firstName: "User", lastName: "Userenko", checked: false },
    { id: 2, firstName: "User2", lastName: "Userenko2", checked: false }
  ];

  socketConnect() {
    this.socket = new SockJS("http://localhost:8080/ws");
    this.stompClient = Stomp.over(this.socket);
  }

  socketSubscribe(id, subscribeAction) {
    const stompClient = this.stompClient;
    stompClient.connect({}, () => {
      stompClient.subscribe(`/topic/${id}`, message => {
        subscribeAction(
          JSON.parse(message.body).content,
          JSON.parse(message.body).sender,
          new Date(JSON.parse(message.body).date)
        );
      });
    });
  }

  socketSend(id, message) {
    this.stompClient.send(
      `/app/message/${id}`,
      {},
      JSON.stringify({ content: message })
    );
  }

  socketDisconnect() {
    this.socket.close();
  }

  getConversations() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }

  getFriends() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.friends);
      }, 700);
    });
  }

  getMessages() {
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

  createConversation() {
    console.log("Conversation created!");
  }
}

export default SonetService;
