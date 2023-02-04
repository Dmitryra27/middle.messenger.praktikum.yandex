import Block from '../../core/Block';
import template from './charts.hbs';
import './charts.scss';
import { NavChartsBlock } from '../../components/Charts_Nav';
import { MessagesBlock } from '../../components/Messages';

export class ChartsPage extends Block {
	constructor() {
		super({});
	}

	init() {

		this.children.navChatsBlock = new NavChartsBlock();

		this.children.messagesBlock = new MessagesBlock();
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}



