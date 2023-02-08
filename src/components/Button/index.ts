import template from './button.hbs';
import Block from '../../core/Block';
import './button.scss';

interface ButtonProps {
	type?: string;
	className: string;
  label: string;
  events?: any;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
