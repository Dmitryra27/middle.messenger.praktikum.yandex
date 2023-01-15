import {setAuthStatus} from "./autorized-status";

export default function loginActionSimple(event) {
    event.preventDefault();
    setAuthStatus(true);
    console.log('AuthStatus = true');
    window.location().href = '/';
    return false;
}
