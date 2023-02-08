import Block from '../../core/Block';
import template from './messages.hbs';
import './messages.scss';
import { Input } from '../Input/input';
import {onSubmit, validate} from '../../core/validations';
import {mockMessages} from '../../mock/mock-messages';
import {MessageItem} from "../Message";
import {Button} from "../Button";


export class MessagesBlock extends Block {
	constructor() {
		super({name:'Миша', data:'19.05'});
	}

	init() {
		this.children.message = new Input({
			type: 'text',
			inputName: 'message',
			className: 'sendMessage',
			required: true,
			autofocus: true,
			minLength: 1,

			events: {
				blur: validate,
				focus: validate,
			},
		});
		this.children.button = new Button({
			type: 'submit',
			label: 'message',
			className: 'send_button',
			events: {
				click: onSubmit,
			},
		});


		const itemMessages: any = [];
		mockMessages.forEach(function (prop, _index, _array) {
			itemMessages.push(new MessageItem(prop));
		});
		//console.log('itemMessages = ', itemMessages)
		this.children.itemMessages = itemMessages;
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
