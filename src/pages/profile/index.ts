import Block from "../../core/Block";
import template from "./profile.hbs";
import Navbar from "../../components/navbar";
import EditProfile from "./components/editProfile";
import ChangePassword from "./components/changePassword";
import Info from "./components/info";
import { Content, state } from "../../types/types";

import * as styles from "./profile.module.scss";

import defPhoto from "../../../static/img/Photo.png";
import withStore from "../../hocs/withStore";
import UploadFile from "../../components/uploadFile";
import ProfileController from "../../controlles/ProfileController";
import AuthController from "../../controlles/AuthController";
import getPhotoNew from "../../utils/getPhotoNew";
import Store from "../../store/Store";

export interface ProfileProps {
	isUserLoading:boolean;
  data: Record<string, string>;
  content: Content;

}

class Profile extends Block {

  constructor(props: ProfileProps) {
    super(props);
    this.props = props
  }

	private displayName() {
  	try {
			const {display_name, first_name} = this.props.data;
			return display_name ? display_name : first_name;
		}catch (e) {
			return 'Мишка'
		}

		}


	private createContent(props: { isUserLoading: boolean; data: Record<string, string>; content: string }) {

		if (props.content === Content.EditProfile) {
			return new EditProfile({
				...this.props.data,
				display_name: this.displayName()
			});
		} else if (props.content === Content.ChangePassword) {
			return new ChangePassword();
		} else {
			return new Info({
				...this.props.data,
				display_name: this.displayName()
			});
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
    (this.children.content as Block).setProps({ data:newProps.data});

    return false;
  }

  init() {

  	console.log('Store.user in start Init = ', Store.getState().user)
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

		this.children.content = this.createContent({isUserLoading:true, content:'', data: {}});
		(this.children.content as Block).setProps({isUserLoading: true});

		AuthController.fetchUser().finally(() => {
			(this.children.content as Block).setProps({content:this.props.content});
			(this.children.content as Block).setProps({data: Store.getState().user.data});
			(this.children.content as Block).setProps({isUserLoading: false});

			console.log('Store.user in Init finally = ', Store.getState().user)
		});


  }

  render() {
  	console.log('props in render = ',this.props)
    return this.compile(template, {...this.props,  styles, name: this.displayName()});
  }
}

const withUser = withStore((state: state) => (state.user));

export default withUser(Profile);
