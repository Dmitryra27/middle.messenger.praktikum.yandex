import Block from "../../../../core/Block";
import template from "./info.hbs";

//import * as styles from "./info.module.scss";
import {default as styles} from "./info.module.scss";

import {User} from "../../../../types/interfaces";

export default class Info extends Block {
  constructor(props?: User) {
    super(props);

  }


  render() {
    return this.compile(template, {...this.props, styles});
  }
}



