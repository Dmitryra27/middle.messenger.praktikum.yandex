import Block from '../../core/Block';
import template from './input.hbs';
import  './input.scss';


interface InputProps {
	type: string;
	inputName: string;
	placeholder?: string;
	required: boolean;
	autofocus?: boolean;
	className: string;
	minLength?: number;
	maxLength?: number;
	events?: any;
}

export class Input extends Block {
	constructor(props: InputProps) {
		super({ ...props });
	}

	render() {
		return this.compile(template, { ...this.props});
	}
}
