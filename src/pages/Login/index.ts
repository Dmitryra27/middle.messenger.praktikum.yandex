import template from './login.hbs';
import Block from '../../core/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/input';
import { Link } from '../../components/Link';
import { renderDOM } from '../../core/renderDOM';
import { RegisterPage } from '../Register';
import './login.scss';
import { validate, onSubmit } from '../../core/validations';

export class LoginPage extends Block {
	constructor() {
		super({});
	}

	init() {
		//@ts-ignore
		this.children.button = new Button({
			type: 'submit',
			label: 'Войти',
			className: 'login_button',
			events: {
				click: onSubmit,
				},
		});
		//@ts-ignore
		this.children.login = new Input({
			type: 'text',
			inputName: 'login',
			className: 'input',
			required: true,
			autofocus: true,
			minLength: 3,
			maxLength: 20,
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
			maxLength: 20,
			events: {
				blur: validate,
				focus: validate,
			},
		});
		//@ts-ignore
		this.children.link = new Link({
			label: 'Ещё не зарегистрированы?',
			route: '/registration',
			className: 'formLink',
			events: {
				click: () => {
					const registerPage = new RegisterPage();
					//@ts-ignore
					renderDOM('#root', registerPage);
				},
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props});
	}
}
