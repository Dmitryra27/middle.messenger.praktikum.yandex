import Block from "../../core/Block";
import template from "./navbar.hbs";
import * as styles from "./navbar.module.scss";

import messageIcon from "../../../static/icons/message_circle.svg";
import logoutIcon from "../../../static/icons/log_out.svg";
import AuthController from "../../controlles/AuthController";
import ButtonIcon from "../buttonIcon";
import withStore from "../../hocs/withStore";
import { state } from "../../types/types";

import defPhoto from "../../../static/img/Photo.png";
import { Link } from "../link";
import Store from "../../store/Store";
import getPhotoNew from "../../utils/getPhotoNew";

interface NavbarProps {
  photo?: string,
}

class Navbar extends Block {
  constructor(props?: NavbarProps) {
    super(props);
  }

  getPhoto(photo: string | undefined) {
  	if (photo===undefined){
  		return defPhoto
		}else{
			return photo
		}

  }

  protected componentDidUpdate(_oldProps: NavbarProps, newProps: NavbarProps): boolean {
  	try{
			if (newProps.photo!==undefined){
				(this.children.profile as Block).setProps({
					img: this.getPhoto(newProps.photo),
				});
			} else if (Store.getState()!=={} && Store.getState().user.data.photo!==undefined){
				(this.children.profile as Block).setProps({
					img: this.getPhoto(Store.getState().user.data.photo),
				});
			} else{(this.children.profile as Block).setProps({
				img: this.getPhoto(defPhoto),
			});}
		}catch (e) {
			(this.children.profile as Block).setProps({
				img: this.getPhoto(defPhoto),
			});
		}
    return false;
  }

  init() {

    this.children.logout = new ButtonIcon({
      label: "Выйти",
      icon: logoutIcon,
      alt: "Log out",
      type: "button",
      events: {
        click: () => {
          AuthController.logout();
        }
      }, 
      propStyle: styles.transp,
    });
    this.children.profile = new Link({
      img: this.getPhoto(this.props.photo),
      label: "Профиль",
      to: "/settings",
      styleImg: styles.photo,
    });

    this.children.chat = new Link({
      img: messageIcon,
      label: "Чат",
      to: "/messenger",
    });
  }

  render() {
    return this.compile(template, 
      {...this.props,
      styles,  
      logoutIcon});
  }
}
//@ts-ignore
const withNavbar = withStore((state: state) => ({photo: getPhotoNew(defPhoto)}));

export default withNavbar(Navbar);
