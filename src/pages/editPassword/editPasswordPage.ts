import Block from "../../core/Block";
import template from "./editPasswordPage.hbs";
import * as styles from "./editPasswordPage.module.scss";
import Navbar from "../../components/navbar";
import ChangePassword from "./component";



export default class EditPasswordPage extends Block {

	init(){

		this.children.edit = new ChangePassword()
		this.children.navbar = new Navbar({});

	}

	render() {
		return this.compile(template,
			{...this.props, styles });
	}
}
