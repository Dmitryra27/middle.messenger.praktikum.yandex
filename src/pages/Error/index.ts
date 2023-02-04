import Block from '../../core/Block';
import template from './error.hbs';
import './style.scss';

export class ErrorPage extends Block {
	constructor() {
		super({});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
