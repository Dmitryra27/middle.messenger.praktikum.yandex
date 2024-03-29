import Block from "../../core/Block";
import template from "./signup.hbs";
import Button from "../../components/button";

import validateInput, {validate} from "../../utils/validateInput";
import validationForm from "../../utils/validationForm";
import AuthController from "../../controlles/AuthController";
import { SignupData } from "../../types/interfaces";
import FormInput from "../../components/form/form";
import Store from "../../store/Store";
import ErrorText from "../../components/errorText/index";

interface SignupProps {
  styles: Record<string, string>
}

export default class Signup extends Block {
  private email!: validate;
  private login!: validate;
  private first_name!: validate;
  private second_name!: validate;
  private phone!: validate;
  private password!: validate;
  private onSubmit = validationForm(this.email,
    this.login,
    this.first_name,
    this.second_name,
    this.phone,
    this.password);

  constructor(props?: SignupProps) {
    super(props);
  }

  async auth(e: Event) {
    const data = this.onSubmit(e);

    if (data) {
      await AuthController.signup(data as SignupData);

      const error = Store.getState().errorAuth;

      if (error) {
        (this.children.error as Block).setProps({error});
      }
    }
  }

  init() {
    this.email = validateInput("", "email");
    this.login = validateInput("", "login");
    this.first_name = validateInput("", "first_name");
    this.second_name = validateInput("", "second_name");
    this.phone = validateInput("", "phone");
    this.password = validateInput("", "password");

    this.children.email = new FormInput({
      label: "E-mail",
      type: "email",
      name: "email",
      placeholder: "Enter your e-mail address",
      validation: this.email,
    });
    this.children.login = new FormInput({
      label: "Login",
      type: "text",
      name: "login",
      placeholder: "Enter your login",
      validation: this.login,
    });
    this.children.firstName = new FormInput({
      label: "First name",
      type: "text",
      name: "first_name",
      placeholder: "Enter your first name",
      validation: this.first_name,
    });
    this.children.secondName = new FormInput({
      label: "Second name",
      type: "text",
      name: "second_name",
      placeholder: "Enter your second name",
      validation: this.second_name,
    });
    this.children.phone = new FormInput({
      label: "Phone",
      type: "tel",
      name: "phone",
      placeholder: "Enter your phone",
      validation: this.phone,
    });
    this.children.password = new FormInput({
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      validation: this.password,
    });
    this.children.button = new Button({
      label: "Sign up",
      events: {
        click: (e) => {
          this.auth(e);
        }
      },
      propStyle: this.props.styles.btn,
    });
    this.children.error = new ErrorText({});
  }

  render() {
    return this.compile(template,
      {...this.props});
  }
}
