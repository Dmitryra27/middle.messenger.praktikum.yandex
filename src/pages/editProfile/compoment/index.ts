import Block from "../../../core/Block";
import template from "./editProfile.hbs";
import Button from "../../../components/button";
import { Content } from "../../../types/types";

import validateInput, {validate} from "../../../utils/validateInput";
import validationForm from "../../../utils/validationForm";

import * as styles from "./editProfile.module.scss";
import ProfileController from "../../../controlles/ProfileController";
import { ProfileData } from "../../../types/interfaces";
import FormInput from "../../../components/formInput";
import Router from "../../../router/Router";
import Store from "../../../store/Store";
import ErrorText from "../../../components/errorText";
//import {ProfileProps} from "../../index";

export interface EditProfileProps {
  changeContent: (content: Content) => void,
  email: string,
  login: string,
  first_name: string,
  second_name: string,
  display_name: string,
  phone: string,
	isUserLoading?:boolean
}

export default class EditProfile extends Block {
  private email!: validate;
  private login!: validate;
  private first_name!: validate;
  private second_name!: validate;
  private display_name!: validate;
  private phone!: validate;
  private onSubmit = validationForm(this.email, 
    this.login,
    this.first_name,
    this.second_name,
    this.display_name,
    this.phone);

  constructor(props?: EditProfileProps) {
    super(props);
  }

  async editProfile(e: Event) {
    const data = this.onSubmit(e);
          
    if (data) {
      await ProfileController.changeProfile(data as ProfileData);

      const error = Store.getState().userError;

      if (error) {
        (this.children.error as Block).setProps({error});
      }
    }   
  }

  init() {
    let {email, login, first_name, second_name, display_name, phone} = this.props;

    this.email = validateInput(email, "email");
    this.login = validateInput(login, "login");
    this.first_name = validateInput(first_name, "first_name");
    this.second_name = validateInput(second_name, "second_name");
    this.display_name = validateInput(display_name, "display_name");
    this.phone = validateInput(phone, "phone");
  
    this.children.email = new FormInput({
      label: "??????????",
      type: "email",
      name: "email", 
      placeholder: "Enter your e-mail address",
      validation: this.email,
      propStyle: styles.input   
    });
    this.children.login = new FormInput({
      label: "??????????",
      type: "text",
      name: "login", 
      placeholder: "Enter your login",
      validation: this.login,
      propStyle: styles.input  
    });
    this.children.firstName = new FormInput({
      label: "??????",
      type: "text",
      name: "first_name", 
      placeholder: "Enter your first name",
      validation: this.first_name,
      propStyle: styles.input   
    });
    this.children.secondName = new FormInput({
      label: "??????????????",
      type: "text",
      name: "second_name", 
      placeholder: "Enter your second name",
      validation: this.second_name,
      propStyle: styles.input   
    });
    this.children.displayName = new FormInput({
      label: "?????? ?? ????????",
      type: "string",
      name: "display_name", 
      placeholder: "Enter your display name",
      validation: this.display_name,
      propStyle: styles.input   
    });
    this.children.phone = new FormInput({
      label: "??????????????",
      type: "tel",
      name: "phone", 
      placeholder: "Enter your phone",
      validation: this.phone,
      propStyle: styles.input  
    });
    this.children.save = new Button({
      label: "??????????????????",
      type: "submit",
      events: {
        click: (e) => {
          this.editProfile(e);
        }
      }, 
      propStyle: styles.btn
    });
    this.children.close = new Button({
      label: "??????????????",
      type: "button",
      events: {
        click: () => {
          Router.go("/settings");
        }
      }, 
      propStyle: styles.btn,
      secondary: true,
    });
    this.children.error = new ErrorText({});
  }

  render() {
    return this.compile(template, 
      {...this.props, 
      styles});
  }
}
