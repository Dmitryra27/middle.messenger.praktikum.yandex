import { Message } from "../types/interfaces";
import Store from "../store/Store";
import WSTransport from "../http/WSTransport";
import ChatController from "./ChatController";

class MessageController {
  private transports: Record<number, WSTransport> = {};

  async connect(id: number) {
    if (this.transports[id]) {
      return;
    }

    const token = await ChatController.getToken(id);
    const userId = Store.getState().user.data.id;

    const transport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);
    await transport.connect();

    transport.on(transport.EVENTS.MESSAGE, this.onMessageReceived.bind(this, id));
    transport.on(transport.EVENTS.CLOSE, this.onConntectionClosed.bind(this, id));

    this.transports[id] = transport;

    this.fetchOldMessages(id);
  }

  onConntectionClosed(id: number) {
    delete this.transports[id];
  }

  onMessageReceived(chatId: number, message: Message | Message[]) {
    if (!message) {
      return;
    }

    let type;

    if (Array.isArray(message)) {
      if (!message.length) {
        return;
      }

      type = "messages";
    } else {
      type = message.type
    }

    const messagesState = Store.getState().messages;
    let oldMessages: [] = [];

    if (messagesState && messagesState[chatId]) {
      oldMessages = messagesState[chatId];
    }

    switch (type) {
      case "message": {
        Store.set(`messages.${chatId}`, [message, ...oldMessages]);
        break;
      }  
      case "messages": {
        Store.set(`messages.${chatId}`, [...oldMessages, ...(message as Message[])]);
        break;
      }
    }    
  }

  fetchOldMessages(id: number) {
    const transport = this.transports[id];

    if (!transport) {
      throw new Error("Conntection is not established yet");
    }

    transport.send({
      type: "get old",
      content: "0",
    });
  }

  async sendMessage(id: number, content: string) { 
    try {
      const transport = this.transports[id];

      if (!transport) {
        await this.connect(id);
      }

      transport.send({
        type: "message",
        content
      });
    } catch {
      throw new Error("Conntection is not established yet");
    }
  }

  closeAll() {
    Object.values(this.transports).forEach(transport => transport.close());
  }
}

export default new MessageController();
