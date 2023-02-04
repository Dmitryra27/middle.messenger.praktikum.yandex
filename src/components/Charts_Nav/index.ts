import Block from '../../core/Block';
import template from './leftNavCharts.hbs';
import './lestNavCharts.scss';
import { Input } from '../Input/input';

import { ItemsChart } from '../Chart_Items';
import { Link } from '../Link';
import { ProfilePage } from '../../pages/Profile';
import { renderDOM } from '../../core/renderDOM';
import {charts} from '../../mock/mockCharts';

export class NavChartsBlock extends Block {
	constructor() {
		super({});
	}

	init() {
		this.children.inputSearch = new Input({
			//id: 'inputSearch',
			type: 'search',
			placeholder: 'поиск',
			inputName: 'searchUser',
			className: 'inputSearchUser',
			required: false,
			//@ts-ignore
			autocomplete: false,
		});

		const itemsChatUser: any = [];
		charts.forEach(function (prop, _index, _array) {
			itemsChatUser.push(new ItemsChart(prop));
		});

		this.children.itemsChatUser = itemsChatUser;

		this.children.linkProfile = new Link({
			label: 'АВ',
			route: '#/profile',
			className: 'linkAvatarUser',
			events: {
				click: () => {
					const profilePage = new ProfilePage();
					renderDOM('#root', profilePage);
				},
			},
		});
	}

	render() {
		return this.compile(template, { ...this.props});
	}
}


