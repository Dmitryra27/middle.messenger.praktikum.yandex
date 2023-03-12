import Block from '../../core/Block';
import template from './server-error.hbs';
import './style.scss';
import {Link} from "../../components/link";
import Router from "../../router/Router";

export class ServerErrorPage extends Block {
	constructor() {
		super({});
	}
	init(){
		this.children.messenger = new Link({
			label: 'Страница Чатов',
			route: '/messenger',
			className: 'homeLink',
			events: {
				click: () => {
					Router.go("/messenger");

				},
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
