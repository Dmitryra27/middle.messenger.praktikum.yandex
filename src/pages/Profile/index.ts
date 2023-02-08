import Block from '../../core/Block';
import template from './profile.hbs';
import styles from './profile.scss';
import { Input } from '../../components/Input/input';
import { Button } from '../../components/Button';
import { renderDOM } from '../../core/renderDOM';
import { EditProfilePage } from '../EditProfile';
import { EditPasswordPage } from '../EditPassword';

export class ProfilePage extends Block {
	constructor() {
		super({});
	}

	init() {
		this.children.avatar = new Input({
			type: 'file',
			inputName: 'avatar',
			className: 'fotoUserInput',
			required: false,
		});

		this.children.button = new Button({
			type: 'submit',
			label: 'Изменить',
			className: 'button',
			events: {
				click: () => {
					const editProfilePage = new EditProfilePage();
					//@ts-ignore
					renderDOM('#root', editProfilePage);
				},
			},
		});

		this.children.buttonPass = new Button({
			type: 'submit',
			label: 'Изменить',
			className: 'button',
			events: {
				click: () => {
					const editPasswordPage = new EditPasswordPage();
					//@ts-ignore
					renderDOM('#root', editPasswordPage);
				},
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props, styles });
	}
}
