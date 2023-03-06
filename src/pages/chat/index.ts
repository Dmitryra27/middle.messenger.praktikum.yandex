import Block from "../../core/Block";
import template from "./chat.hbs";
import Navbar from "../../components/navbar";
import ChatController from "../../controlles/ChatController";

import * as styles from "./chat.module.scss";

import { ChatInfo } from "../../types/interfaces";
import ChatList from "../../components/chatList";
import ChatWindow from "../../components/chatWindow";
import Store from "../../store/Store";

interface ChatProps {
  chats: ChatInfo[],
}

export default class ChatPage extends Block {
  
  constructor(props: ChatProps) {
    super(props);
  }

  init() {
    const state = Store.getState();
    console.log('Store = ', state)
    this.children.chatList = new ChatList({chats: {isLoading: true}});
    this.children.chat = new ChatWindow({});

    ChatController.fetchChats().finally(() => {
      (this.children.chatList as Block).setProps({isLoading: false});
    });

    this.children.navbar = new Navbar({});
  }

  render() {
    return this.compile(template, 
      {...this.props, 
        styles, 
      });
  }
}
