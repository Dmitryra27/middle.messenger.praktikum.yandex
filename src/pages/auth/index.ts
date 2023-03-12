import Block from "../../core/Block";
import template from "./auth.hbs";
import Signin from "../signin";
import Signup from "../signup";

import * as styles from "./auth.module.scss";
import { Link } from "../../components/link";

interface AuthProps {
  signin: boolean,
}

interface AuthData {
  title: string,
  question: string,
  to: string,
  label: string,
}

const dataSignin: AuthData = {
  title: "ВХОД",
  question: "Нет Аккаунта?",
  to: "/sign-up",
  label: "Регистрация",
}

const dataSignup: AuthData = {
  title: "Регистрация",
  question: "Есть аккаунт ?",
  to: "/",
  label: "Вход"
}

export default class Auth extends Block {
  constructor(props?: AuthProps) {
    super(props);
  }

  private content(props: AuthProps): AuthData {
    return props.signin ? dataSignin : dataSignup
  }

  protected componentDidUpdate(_oldProps: AuthProps, newProps: AuthProps): boolean {
    const data = this.content(newProps);

    (this.children.link as Block).setProps({
      label: data.label,
      to: data.to,
    });

    return true;
  }

  init() {
    const data = this.content(this.props as AuthProps);

    this.children.form = this.props.signin ? new Signin({styles}) : new Signup({styles});
    this.children.link = new Link({
      label: data.label,
      to: data.to,
      propStyle: styles,
    });
  }

  render() {
    return this.compile(template, 
      {...this.props, 
        styles,
        ...this.content(this.props as AuthProps),
      });
  }
}
