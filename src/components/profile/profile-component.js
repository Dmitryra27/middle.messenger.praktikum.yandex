import './profile.scss';
import {btnActions} from '../../utils/profile-btn-actions';

function ProfileComponent(user) {

    return (
        `<div class="user-profile-container row" onload="btnActions()">
            <div class="user-profile__left">
            <div class="pointer profile-center"></div>
            </div>
        <div class="user-profile__right column">
            
            <div class="user-profile__foto-img" onclick="">
                <p class="img__text">Поменять аватар</p>
            
            </div>
            <h3 class="profile-title">${user.display_name}</h3>
            
            <div class = 'user-profile-box column'>
            <div class="user-profile__child row">
                <div class="profile-left">Почта: </div>
                <div class="profile-right">${user.email}</div>
            </div>
            <div class="user-profile__child row">
                <div class="profile-left">Логин: </div>
                <div class="profile-right">${user.login}</div>
            </div>
            <div class="user-profile__child row">
                <div class="profile-left">Имя: </div> 
                <div class="profile-right">${user.first_name}</div>
            </div><div class="user-profile__child">
                <div class="profile-left">Фамилия: </div>
                <div class="profile-right">${user.second_name}</div>
            </div>
            
            <div class="user-profile__child row">
                <div class="profile-left">Имя в чате: </div> 
                <div class="profile-right">${user.display_name}</div>
            </div>
            <div class="user-profile__child row">
                <div class="profile-left">Телефон: </div> 
                <div class="profile-right">${user.phone}</div>
            </div>
            
            <a id = 'change-login-btn' class="profile-button blue" href="/profileChangeDatas" >Сменить данные пользователя</a>
            <a id = 'change-password-btn' class="profile-button blue" href="/profileChangePassword">Сменить пароль</a>
            <a id = 'logout-btn' class="profile-button red" href="/login">Выйти</a> 
            </div>
        </div> 
    </div>`);
}

export default ProfileComponent

