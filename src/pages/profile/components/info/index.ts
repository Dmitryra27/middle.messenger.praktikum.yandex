import Block from "../../../../core/Block";
import template from "./info.hbs";
import Button from "../../../../components/button";
import { Content } from "../../../../types/types";

import * as styles from "./info.module.scss";
import Router from "../../../../router/Router";
import {ProfileProps} from "../../index";
import AuthController from "../../../../controlles/AuthController";
import Store from "../../../../store/Store";
import getPhotoNew from "../../../../utils/getPhotoNew";

export interface InfoProps {
  changeContent: (content: Content) => void,
  email: string,
  login: string,
  first_name: string,
  second_name: string,
  display_name: string,
  phone: string,
	isUserLoading:boolean
}

export default class Info extends Block {
  constructor(props?: ProfileProps) {
    super(props);
  }


  init() {
  	try{
			AuthController.fetchUser().finally(() => {

				(this as Block).setProps({data: Store.getState().user.data});
				(this as Block).setProps({isUserLoading: false});

				console.log('This.props in Info = ', this.props)
			});
		}catch (e) {
			console.log('Error in Info FetchUser', e)
		}



    this.children.editProfile = new Button({
      label: "Редактировать",
      events: {
        click: () => {
          Router.go("/settings/info");;
        }
      }, 
      propStyle: styles.btn
    });
    this.children.changePassword = new Button({
      label: "Сменить пароль",
      events: {
        click: () => {
          Router.go("/settings/password");
        }
      }, 
      propStyle: styles.btn
    });
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}
