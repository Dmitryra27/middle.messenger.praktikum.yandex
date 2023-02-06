import Block from '../../core/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/input';
import template from './register.hbs';
import { onSubmit, validate } from '../../core/validations';
import './register.scss';

export class RegisterPage extends Block {
	constructor() {
		super({});
	}

	init() {
		//@ts-ignore
		this.children.button = new Button({
			type: 'submit',
			label: 'Создать аккаунт',
			className: 'reg__button',
			events: {
					click: onSubmit,
			},
		});
		//@ts-ignore
		this.children.first_name = new Input({
			type: 'text',
			inputName: 'first_name',
			className: 'input',
			required: true,
			autofocus: true,
			events: {
				blur: validate,
				focus: validate,
			},
		});
		//@ts-ignore
		this.children.second_name = new Input({
			type: 'text',
			inputName: 'second_name',
			className: 'input',
			required: true,
			events: {
				blur: validate,
				focus: validate,
			},
		});
		//@ts-ignore
		this.children.login = new Input({
			type: 'text',
			inputName: 'login',
			className: 'input',
			required: true,
			minLength: 3,
			maxLength: 20,
			events: {
				blur: validate,
				focus: validate,
			},
		});
		//@ts-ignore
		this.children.email = new Input({
			type: 'email',
			inputName: 'email',
			className:'input',
			required: true,
			events: {
				blur: validate,
				focus: validate,
			},
		});
		//@ts-ignore
		this.children.password = new Input({
			type: 'password',
			inputName: 'password',
			className: 'input',
			required: true,
			minLength: 8,
			maxLength: 40,
			events: {
				blur: validate,
				focus: validate,
			},
		});
		//@ts-ignore
		this.children.confirm_password = new Input({
			type: 'password',
			inputName: 'confirm_password',
			className: 'input',
			required: true,
			minLength: 8,
			maxLength: 40,
			events: {
				blur: validate,
				focus: validate,
			},
		});
		//@ts-ignore
		this.children.phone = new Input({
			type: 'tel',
			inputName: 'phone',
			className: 'input',
			required: true,
			minLength: 10,
			maxLength: 15,
			events: {
				blur: validate,
				focus: validate,
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
