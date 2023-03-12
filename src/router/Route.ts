import Block from "../core/Block";
import {isEqual, render} from "./helpers";

export default class Route {
	private _block: Block | null = null;
	private _blockClass: typeof Block;
	private _pathname: string;
	private _props: Record<string, any>;

	constructor(pathname: string, view: typeof Block, props: Record<string, any>) {
		this._pathname = pathname;
		this._blockClass = view;
		this._props = props;
	}

	navigate(pathname: string) {
		if (this.match(pathname)) {
			this._pathname = pathname;
			this.render();
		}
	}

	leave() {
		if (this._block) {
			this._block = null;
		}
	}

	match(pathname: string) {
		return isEqual(pathname, this._pathname);
	}

	render() {
		if (!this._block) {
			this._block = new this._blockClass(this._props);
			render(this._props.rootQuery, this._block);
			return;
		}

		this._block.show();
	}
}


