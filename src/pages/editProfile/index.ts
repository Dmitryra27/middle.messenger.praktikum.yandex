import Block from "../../core/Block";
import template from "./editProfilePage.hbs";

import * as styles from "./editProfile.module.scss";

import EditProfile from "./compoment";
import Navbar from "../../components/navbar";
import UploadFile from "../../components/uploadFile";
import ProfileController from "../../controlles/ProfileController";
import AuthController from "../../controlles/AuthController";
import defPhoto from "../../../static/img/Photo.png";
import {ProfileProps} from "../profile";



export default class EditProfilePage extends Block {

	constructor(props: ProfileProps) {
		super(props);
		this.props = props
	}

init() {

	let photo;
	try {
		photo = this.props.data.photo
	} catch (e) {
		photo = defPhoto
	}


	this.children.edit = new EditProfile()
	this.children.navbar = new Navbar({});
	this.children.avatar = new UploadFile({
		photo: photo,
		events: {
			req: async (data: FormData) => {
				await ProfileController.changeAvatar(data);
				await AuthController.fetchUser();
			}
		}
	});
}

	render() {
		return this.compile(template,
			{...this.props, styles });
	}
}
