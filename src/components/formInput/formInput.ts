import Block from "../../core/Block";
import {validate} from "../../utils/validateInput";
//import ErrorInput from "../ErrorInput/errorInput";
//import Input from "../input/index";
import template from "./formInput1.hbs";
//import {default as styles} from "./formInput.module.scss";
import * as styles from  "./formInput.module.scss";

interface FormInputProps {
  label?: string,
  type: string,
  name: string,
  placeholder: string,

  validation: validate,
  propStyle?: string,
}

class FormInput extends Block {
  constructor(props: FormInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}

export default FormInput
