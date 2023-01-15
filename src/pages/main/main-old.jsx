import MainComponent from "../../components/main/main_component";
import {getAuthStatus} from "../../utils/autorized-status";
import Login from "../login/login";

export default function Main(chartsData, userData, postData) {
    let authStatus = getAuthStatus();
    if (authStatus === true) {
        return `${MainComponent(chartsData, userData, postData)}`;
    } else {
        return `${Login()}`;
    }

};


