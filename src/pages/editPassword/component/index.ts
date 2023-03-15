import Block from "../../../core/Block";
import template from "./changePassword.hbs";
import Button from "../../../components/button";

import validateInput, {validate} from "../../../utils/validateInput";
import validationForm from "../../../utils/validationForm";

//import * as styles from "./changePassword.module.scss";
import {default as styles} from "./changePassword.module.scss";

import ProfileController from "../../../controlles/ProfileController";
import { PasswordData } from "../../../types/interfaces";
import FormInput from "../../../components/FormInput/formInput";
import Router from "../../../router/Router";
import Store from "../../../store/Store";
import ErrorText from "../../../components/errorText";

export interface ChangePasswordProps {}

export default class ChangePassword extends Block {
  private oldPassword!: validate;
  private password!: validate;
  private onSubmit = validationForm(this.oldPassword, this.password);

  constructor(props?: ChangePasswordProps) {
    super(props);
  }

  async changePassword(e: Event) {
    this.onSubmit(e);

    if (this.oldPassword.value && this.password.value) {
      const data = {
        oldPassword: this.oldPassword.value,
        newPassword: this.password.value,
       };

      await ProfileController.changePassword(data as PasswordData);

      const error = Store.getState().userError;

      if (error) {
        (this.children.error as Block).setProps({error});
      } else {
        this.oldPassword.value = "";
        this.password.value = "";

        (this.children.oldPassword as Block).setProps({validation: this.oldPassword});
        (this.children.newPassword as Block).setProps({validation: this.password});

        (this.children.error as Block).setProps({error: ""});
      }
    }
  }

  init() {
    this.oldPassword = validateInput("", "oldPassword");
    this.password = validateInput("", "password");

    this.children.oldPassword = new FormInput({
      label: "Старый пароль",
      type: "password",
      name: "oldPassword",
      placeholder: "Введите старый пароль",
      validation: this.oldPassword,
      propStyle: styles.input
    });
    this.children.newPassword = new FormInput({
      label: "Новый пароль",
      type: "password",
      name: "password",
      placeholder: "Введите новый пароль",
      validation: this.password,
      propStyle: styles.input
    });
    this.children.save = new Button({
      label: "Сохранить",
      type: "submit",
      events: {
        click: (e) => {
          e.preventDefault();
          this.changePassword(e);
        },
      },
      propStyle: styles.btn
    });
    this.children.close = new Button({
      label: "Закрыть",
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
    return this.compile(template, {...this.props, styles});
  }
}
