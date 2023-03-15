import Block from "../../core/Block";
import {validate, validEvents} from "../../utils/validateInput";
//import ErrorInput from "../ErrorInput/errorInput";
import Input from "../input/index";
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

  protected componentDidUpdate(_oldProps: FormInputProps, newProps: FormInputProps): boolean {
    (this.children.input as Block).setProps({value: newProps.validation.value});

    return false;
  }

  init() {
    const {label, type, name, placeholder, validation} = this.props;
    //this.children.error = new ErrorInput({
     // text: "",
    //});
    this.children.input = new Input({
      label,
      type,
      name,
      placeholder,
      value: validation.value,
      events: validEvents(validation),
    });

    //validation.errorComponent = this.children.error;
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}

export default FormInput
