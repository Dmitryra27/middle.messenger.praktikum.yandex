import { withRouter } from "../../hocs/withRouter";
import Block from "../../core/Block";
import template from "./link.hbs";
import * as styles from "./link.module.scss";

interface LinkProps {
  label: string,
  to: string,
  styleLink?: string,
  styleImg?: string,
  img?: string,
  events?: {
    click: () => void;
  }
}

class BaseLink extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, {...this.props, styles});
  }
}

export const Link = withRouter(BaseLink);
