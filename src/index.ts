import "./styles/globals.scss";

import Router from "./router/Router";

import Auth from "./pages/auth";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import AuthController from "./controlles/AuthController";
import "./controlles/MessageController";
import Store from "./store/Store";
import {ServerErrorPage} from "./pages/serverError";
import {NotFoundPage} from "./pages/notFound";
import EditProfilePage from "./pages/editProfile";
import EditPasswordPage from "./pages/editPassword/editPasswordPage";

enum Routes {
  Index = "/",
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
    .use(Routes.Index, Auth, {signin: true})
    .use(Routes.Signup, Auth)
    .use(Routes.Page404, NotFoundPage)
    .use(Routes.Page500, ServerErrorPage)
    .use(Routes.Profile, Profile)
    .use(Routes.EditProfile, EditProfilePage )
    .use(Routes.EditPassword, EditPasswordPage)
    .use(Routes.Chat, Chat)

    let isProtectedRoute = true;

    switch(window.location.pathname) {
      case Routes.Index:
      case Routes.Signup: 
        isProtectedRoute = false;
        break;
    }

    await AuthController.fetchUser();
      
    const error = Store.getState().fetchUser;

    Router.start();

    if (error) {
      if (isProtectedRoute) {
        Router.go(Routes.Index);
      }
    } else {
      if (!isProtectedRoute) {
        Router.go(Routes.Chat);
      }
    }
});

