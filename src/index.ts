import { renderDOM } from './core/renderDOM';
import { ROUTE_PAGES } from './types/configRouting';
import { StartPage } from './pages/Start';
import { ErrorPage } from './pages/Error';
import {LoginPage} from './pages/Login';
import {RegisterPage} from './pages/Register';
import {ServerErrorPage} from "./pages/ServerError";
import {ProfilePage} from "./pages/Profile";
import {EditProfilePage} from "./pages/EditProfile";
import {EditPasswordPage} from "./pages/EditPassword";
import {ChartsPage} from "./pages/Charts";


document.addEventListener('DOMContentLoaded', () => {
  const startPage = new StartPage();
	const errorPage = new ErrorPage();
	const serverErrorPage = new ServerErrorPage();
	const loginPage = new LoginPage();
	const registerPage = new RegisterPage();
	const profilePage = new ProfilePage();
	const editPasswordPage = new EditPasswordPage();
	const editProfilePage = new EditProfilePage();
	const chartsPage = new ChartsPage();

	switch (document.location.pathname) {
		case ROUTE_PAGES.START:
			renderDOM('#root', startPage);
			break;

		case ROUTE_PAGES.NOT_FOUND:
			renderDOM('#root',errorPage);
			break;
		case ROUTE_PAGES.SERVER_ERROR:
			renderDOM('#root', serverErrorPage);
			break;
		case ROUTE_PAGES.LOGIN:
			renderDOM('#root',loginPage);
			break;

		case ROUTE_PAGES.REGISTER:
			renderDOM('#root',registerPage);
			break;
		case ROUTE_PAGES.PROFILE:
			renderDOM('#root',profilePage);
			break;
		case ROUTE_PAGES.EDIT_PASSWORD:
			renderDOM('#root',editPasswordPage);
			break;
		case ROUTE_PAGES.EDIT_PROFILE:
			renderDOM('#root',editProfilePage);
			break;

		case ROUTE_PAGES.CHART:
				renderDOM('#root', chartsPage);
			break;

		default:
			renderDOM('#root', errorPage);
			break;

}});
