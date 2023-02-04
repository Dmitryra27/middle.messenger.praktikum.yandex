import Block from '../../core/Block';
import template from './server-error.hbs';
import './style.scss';

export class ServerErrorPage extends Block {
	constructor() {
		super({});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
