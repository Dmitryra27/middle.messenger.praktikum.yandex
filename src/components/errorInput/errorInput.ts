import Block from "../../core/Block";
import template from "./errorInput.hbs";
import {default as styles} from "./errorInput.module.scss";

interface ErrorInputProps {
  text?: string,
}

class ErrorInput extends Block {
  constructor(props?: ErrorInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}

export default ErrorInput
