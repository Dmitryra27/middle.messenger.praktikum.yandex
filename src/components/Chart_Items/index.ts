import Block from '../../core/Block';
import template from './ChartItems.hbs';
import  './ChartItems.scss';
import {chartItemType} from '../../types/chartItemType';


export class ItemsChart extends Block {
	constructor(props: chartItemType) {
		super({ ...props });
	}

	render() {
		return this.compile(template, { ...this.props });
	}
}
