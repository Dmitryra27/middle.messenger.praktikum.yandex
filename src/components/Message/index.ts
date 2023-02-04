import Block from '../../core/Block';
import template from './message.hbs';
import './message.scss';
import {MessageItemType} from "../../types/messageItemType";

export class MessageItem extends Block {
	constructor(props: MessageItemType) {
		super({...props});
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
