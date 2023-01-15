import Main from "./pages/main/main-old";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Page404 from "./pages/page404/page404";
import Page500 from "./pages/page500/page500";
import Profile from './pages/profile/profile-function'
import {postsData} from './mock/mockPostsData';
import {userData} from './mock/mockUserData'
import {chartsData} from "./mock/mockChartsData";
import ProfileChangePassword from "./pages/profile/profile-change-password";
import ProfileChangeDatas from "./pages/profile/profile-change-datas";


const root = document.getElementById('root')

const routes = {
    '/': () => {
        root.innerHTML = Main(chartsData, userData, postsData);
    },
    '/login': () => {
        root.innerHTML = Login();
    },
    '/register': () => {
        root.innerHTML = Register();
    },
    '/profile': () => {
        root.innerHTML = Profile(userData)
    },
    '/profileChangeDatas': () => {
        root.innerHTML = ProfileChangeDatas(userData)
    },
    '/profileChangePassword': () => {
        root.innerHTML = ProfileChangePassword(userData)
    },
    '/500': () => {
        root.innerHTML = Page500();
    },
    '/404': () => {
        root.innerHTML = Page404();
    },

};

window.addEventListener('hashchange', handleRouteChange);
handleRouteChange();

function handleRouteChange() {
    const path = window.location.pathname;
    const route = routes[path] || routes['/404'];
    route();
}
