import Router from "../src/router/Router";

import Auth from "../src/pages/auth";
import Profile from "../src/pages/profile";
import Chat from "../src/pages/chat";
import AuthController from "../src/controlles/AuthController";
import { Content } from "../src/types/types";
import "../src/controlles/MessageController";
import Store from "../src/store/Store";
import {NotFoundPage} from "../src/pages/notFound";
import {ServerErrorPage} from "../src/pages/serverError";


enum Routes {
  Start = "/",
	Signup = "/sign-up",
  Page404 = "/page404",
  Page500 = "/page500",
  Profile = "/settings",
  ProfileInfo = "/settings/info",
  ProfilePassword = "/settings/password",
  Chat = "/messenger",
}

window.addEventListener("DOMContentLoaded", async ()=> {
  Router
		.use(Routes.Start, Auth, {signin: true})
		.use(Routes.Signup, Auth)
    .use(Routes.Page404, NotFoundPage)
    .use(Routes.Page500, ServerErrorPage)
    .use(Routes.Profile, Profile, {content: Content.Info})
    .use(Routes.ProfileInfo, Profile, {content: Content.EditProfile})
    .use(Routes.ProfilePassword, Profile, {content: Content.ChangePassword})
    .use(Routes.Chat, Chat)

    let isProtectedRoute = true;

    switch(window.location.pathname) {
      case Routes.Start:
      case Routes.Signup: 
        isProtectedRoute = false;
        break;
    }
	Router.start();

		try{
			await AuthController.fetchUser();
		}catch (e) {
    	if (e.reason === 'User already in system'){
				console.log('Пользователь уже в системе ',e.reason)
				Router.go(Routes.Chat);
			}else if(e.reason === 'Cookie is not valid'){
				console.log('Пользователь не авторизован')
				Router.go(Routes.Start);
			}else {
				console.log('Error = ', e.reason)
				Router.go(Routes.Start);
			}

		}

      
    const error = Store.getState().fetchUser;



    if (error) {
      if (isProtectedRoute) {
        Router.go(Routes.Start);
      }
    } else {
      if (!isProtectedRoute) {
        Router.go(Routes.Chat);
      }
    }

});
