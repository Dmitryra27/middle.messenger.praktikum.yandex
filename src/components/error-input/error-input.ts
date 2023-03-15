import Block from "../../core/Block";
import template from "./error-input.hbs";
import {default as styles} from "./error-input.module.scss";

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
