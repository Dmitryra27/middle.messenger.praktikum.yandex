import Store from "./store/Store";
import Router from "./router/Router";

import Auth from "./pages/auth";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import AuthController from "./controlles/AuthController";

import "./controlles/MessageController";

import {NotFoundPage} from "./pages/notFound";
import {ServerErrorPage} from "./pages/serverError";
import EditProfilePage from "./pages/editProfile";
import EditPasswordPage from "./pages/editPassword/editPasswordPage";

enum Routes {
  Start = "/",
	Signup = "/sign-up",
  Page404 = "/page404",
  Page500 = "/page500",
  Profile = "/settings",
  EditProfile = "/editSettings",
  EditPassword = "/editPassword",
  Chat = "/messenger",
}

window.addEventListener("DOMContentLoaded", async ()=> {
  Router
		.use(Routes.Start, Auth, {signin: true})
		.use(Routes.Signup, Auth)
    .use(Routes.Page404, NotFoundPage)
    .use(Routes.Page500, ServerErrorPage)
		.use(Routes.Page404, NotFoundPage)
		.use(Routes.Page500, ServerErrorPage)
    .use(Routes.Profile, Profile, )
    .use(Routes.EditProfile, EditProfilePage )
    .use(Routes.EditPassword, EditPasswordPage)
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
		}catch (e:any) {
    	if (e.reason === 'User already in system'){
				console.log('Пользователь уже в системе ',e.reason)
				Router.go(Routes.Chat);
			}else if(e.reason === 'Cookie is not valid'){
				console.log('Пользователь не авторизован')
				Router.go(Routes.Start);
			}else {
				console.log('Error = ', e)
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

