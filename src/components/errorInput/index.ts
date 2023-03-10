import Block from "../../core/Block";
import template from "./errorInput.hbs";
import * as styles from "./errorInput.module.scss";

interface ErrorInputProps {
  text?: string,
}

export default class ErrorInput extends Block {
  constructor(props: ErrorInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}
