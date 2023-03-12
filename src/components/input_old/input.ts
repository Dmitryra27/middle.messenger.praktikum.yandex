import Block from '../../core/Block';
import template from './input.hbs';
import  './input.scss';


interface InputProps {
	id?:string,
	type?: string;
	inputName?: string;
	name?:string;
	label?:string;
	placeholder?: string;
	required?: boolean;
	autofocus?: boolean;
	className?: string;
	minLength?: number;
	maxLength?: number;
	events?: Event;
	value?:any|null;
}

export class Input extends Block {
	constructor(props: InputProps) {
		super({ ...props });
	}

	render() {
		return this.compile(template, { ...this.props});
	}
}
