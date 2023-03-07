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
import Store from "../../store/Store";

interface ProfileProps {
  data?: Record<string, string>;
  content: Content;
}

class Profile extends Block {

  constructor(props?: ProfileProps) {
    super(props);
  }

  private displayName() {
  	try {
			if (Store.getState()!=={} && Store.getState().user.data.first_name!==undefined){

				const {display_name} = this.props.data;
				return display_name ? display_name : Store.getState().user.first_name;
			}
  	}catch (e) {
			return 'Мишка'
		}
  }

  private createContent() {

    if (this.props.content === Content.EditProfile) {
      return new EditProfile({
          ...this.props.data,
          display_name: this.displayName()
        });
    } else if (this.props.content === Content.ChangePassword) {
      return new ChangePassword();
    } else {
      return new Info({
        ...this.props.data,
        display_name: this.displayName()
      });
    }
  }

	getPhoto(photo: string | undefined) {
		if (photo===undefined){
			return defPhoto
		}else{
			return photo
		}

	}

  protected componentDidUpdate(_oldProps: ProfileProps, newProps: ProfileProps): boolean {
    const photo = this.getPhoto(newProps.data?.photo);

    (this.children.avatar as Block).setProps({photo});

    return false;
  }

  init() {
    let photo = defPhoto;
    if (Store.getState()!=={} && Store.getState().user!==undefined){
			photo = Store.getState().user.data.photo
		}

    const state = Store.getState()
		console.log('Store = ', state)
		console.log('Props= ', this.props)


    this.children.navbar = new Navbar({});
    this.children.avatar = new UploadFile({
      photo,
      events: {
        req: async (data: FormData) => {
          await ProfileController.changeAvatar(data);
          await AuthController.fetchUser();  
        }
      }
    });
  }

  render() {   
    this.children.content = this.createContent();
    return this.compile(template, {...this.props, styles, name: this.displayName()});
  }
}

const withUser = withStore((state: state) => (state.user));

export default withUser(Profile);
