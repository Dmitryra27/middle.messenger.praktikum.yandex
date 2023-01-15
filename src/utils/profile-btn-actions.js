import {setProfileState} from "./profile-state";

export function btnActions() {
    const changeUserDataBtn = document.getElementById('change-login-btn')
    const changePasswordBtn = document.getElementById('change-password-btn')
    const logoutBtn = document.getElementById('logout-btn')

    changeUserDataBtn.addEventListener('click', function (e) {
        e.preventDefault();
        setProfileState(2);
        alert('Change User')
        console.log('changeUserDataBtn')
    })

    changePasswordBtn.addEventListener('click', function (e) {
        e.preventDefault();
        setProfileState(3);
        alert('Change Password')
    })
    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Logout')
        const url = window.location.href;
        window.location.replace(url + '/login');
    })

}
