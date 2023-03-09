import Block from "../../core/Block";
import template from "./profile.hbs";
import Navbar from "../../components/navbar";

import Info from "./components/info";
import {  state } from "../../types/types";

import * as styles from "./profile.module.scss";

import defPhoto from "../../../static/img/Photo.png";
import withStore from "../../hocs/withStore";
import UploadFile from "../../components/uploadFile";
import ProfileController from "../../controlles/ProfileController";
import AuthController from "../../controlles/AuthController";
import getPhotoNew from "../../utils/getPhotoNew";
import Button from "../../components/button";
import Router from "../../router/Router";
import Store from "../../store/Store";



export interface ProfileProps {
	isUserLoading:boolean;
  data: Record<string, string>;
 }

 //export default
 class Profile extends Block {

  constructor(props: ProfileProps) {
    super(props);
    //this.props = props
  }

	 private displayName() {
  	try{
			const {display_name} = this.props.data;
			return display_name
		}catch (e) {
			console.log('No display_name in props')
		}
		try{
			const {first_name} = this.props.data;
			return first_name
		}catch (e) {
			console.log('No first_name in props')
		}
		let name ='Введите Имя в Чате';
		try {
			name = Store.getState().user.data.first_name
			return name
		}catch (e) {
			return name
		}


	 }

	getPhoto(photo: string | undefined) {
  	try{
			if (photo===undefined){
				return defPhoto
			}else{
				return photo
			}
		}catch (e){
			return defPhoto
		}


	}

  protected componentDidUpdate(_oldProps: ProfileProps, newProps: ProfileProps): boolean {
    const photo = getPhotoNew(newProps.data?.photo);

    (this.children.avatar as Block).setProps({photo});
    (this.children.info as Block).setProps({ data:newProps});

    return false;
  }

  init() {


  	let photo;
  	try {
			photo = this.props.data.photo
		}catch (e) {
			photo = defPhoto
		}

    this.children.navbar = new Navbar({});
    this.children.avatar = new UploadFile({
      photo:photo,
      events: {
        req: async (data: FormData) => {
          await ProfileController.changeAvatar(data);
          await AuthController.fetchUser();  
        }
      }
    });
		this.children.editProfile = new Button({
			label: "Редактировать",
			events: {
				click: () => {
					Router.go("/editSettings");;
				}
			},
			propStyle: styles.btn
		});
		this.children.changePassword = new Button({
			label: "Сменить пароль",
			events: {
				click: () => {
					Router.go("/editPassword");
				}
			},
			propStyle: styles.btn
		});

		this.children.info = new Info({...this.props.data});
		(this.children.info as Block).setProps({isUserLoading: true});

		AuthController.fetchUser().finally(() => {

			(this.children.info as Block).setProps({...this.props.data});
			(this.children.info as Block).setProps({isUserLoading: false});

		});


  }

  render() {
  	console.log('props in render = ',this.props)
    return this.compile(template, {...this.props,first_name:'Mike', styles, name: this.displayName()});
  }
}

const withUser = withStore((state: state) => (state.user));

export default withUser(Profile);
