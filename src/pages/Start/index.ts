import template from './start.hbs';
import Block from '../../core/Block';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { renderDOM } from '../../core/renderDOM';
import { LoginPage } from '../Login';
import { ErrorPage } from '../Error';
import './start.scss';

export class StartPage extends Block {
	constructor() {
		super({});
	}

	init() {
		//@ts-ignore
		this.children.button = new Button({
			type: 'button',
			label: 'Войти',
			className: 'start_button_blue',

			events: {
				click: () => {
					const loginPage = new LoginPage();
					renderDOM('#root', loginPage);
				},
			},
		});
		//@ts-ignore
		this.children.link = new Link({
			label: '404',
			route: '/error',
			className: 'homeLink',
			events: {
				click: () => {
					const errorPage = new ErrorPage();
					renderDOM('#root', errorPage);
					console.log('Error Page !!!');
				},
			},
		});
	}

	render() {
    return this.compile(template, { ...this.props });
  }
}
