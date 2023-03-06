import Block from '../core/Block';
import Router from '../router/Router';

export function withRouter(Component: typeof Block) {

  return class WithRouter extends Component {
    constructor(props: Record<string, any>) {
      super({ ...props, router: Router });
    }
  }
}
