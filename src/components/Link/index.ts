import template from './link.hbs';
import Block from '../../core/Block';
import  './link.scss';

interface LinkProps {
	label: string;
	route: string;
	className: string;
	events?: {
		click: () => void;
	}
}

export class Link extends Block {
	constructor(props: LinkProps) {
		super({ ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
