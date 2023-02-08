import Block from '../../core/Block';
import template from './editProfile.hbs';
import  './edit.scss';
import { Input } from '../../components/Input/input';
import { onSubmit, validate } from '../../core/validations';
import { Button } from '../../components/Button';

export class EditProfilePage extends Block {
	constructor() {
		super({});
	}

	init() {
		this.children.email = new Input({
			type: 'email',
			inputName: 'email',
			className:'edit_input',
			required: true,
			events: {
				blur: validate,
				focus: validate,
			},
		});

		this.children.login = new Input({
			type: 'text',
			inputName: 'login',
			className: 'edit_input',
			required: true,
			minLength: 3,
			maxLength: 20,
			events: {
				blur: validate,
				focus: validate,
			},
		});

		this.children.first_name = new Input({
			type: 'text',
			inputName: 'first_name',
			className: 'edit_input',
			required: true,
			autofocus: true,
			events: {
				blur: validate,
				focus: validate,
			},
		});

		this.children.second_name = new Input({
			type: 'text',
			inputName: 'second_name',
			className: 'edit_input',
			required: true,
			events: {
				blur: validate,
				focus: validate,
			},
		});

		this.children.chat_name = new Input({
			type: 'text',
			inputName: 'chat_name',
			className: 'edit_input',
			required: true,
			events: {
				blur: validate,
				focus: validate,
			},
		});

		this.children.phone = new Input({
			type: 'tel',
			inputName: 'phone',
			className: 'edit_input',
			required: true,
			minLength: 10,
			maxLength: 15,
			events: {
				blur: validate,
				focus: validate,
			},
		});

		this.children.button = new Button({
			type: 'submit',
			label: 'Сохранить',
			className: 'button edit_blue',
			events: {
				click: onSubmit,
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
