import Block from "../../../../core/Block";
import template from "./info.hbs";

import * as styles from "./info.module.scss";

//import withStore from "../../../../hocs/withStore";
//import {  state } from "../../../../types/types";
import {User} from "../../../../types/interfaces";

export default class Info extends Block {
  constructor(props?: User) {
    super(props);

  }


  render() {
    return this.compile(template, {...this.props, styles});
  }
}

//const withUser = withStore((state: state) => (state.user));

//export default withUser(Info);


