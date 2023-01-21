import './profile.scss';

function ChangeData(user) {
    return (`<div class="user-profile-container row" onload="btnActions()">
            <div class="user-profile__left">
            <div class="pointer profile-center"></div>
            </div>
        <div class="user-profile__right column">
            
            <div class="user-profile__foto-img"></div>
            
            
            <div class = 'user-profile-box column'>
            <div class="user-profile__child row">
                <div class="profile-left">Почта: </div>
                <input class="profile-right" type="text" id="email" name="email" placeholder="${user.email}" >
            </div>
            <div class="user-profile__child row">
                <div class="profile-left">Логин: </div>
                <input class="profile-right" type="text" id="login" name="login" placeholder="${user.login}">
            </div>
            <div class="user-profile__child row">
                <div class="profile-left">Имя: </div> 
                <input class="profile-right" type="text" id="first_name" name="first_name" placeholder="${user.first_name}">
            </div><div class="user-profile__child">
                <div class="profile-left">Фамилия: </div>
                <input class="profile-right" type="text" id="second_name" name="second_name" placeholder="${user.second_name}">
            </div>
            
            <div class="user-profile__child row">
                <div class="profile-left">Имя в чате: </div> 
                <input class="profile-right" type="text" id="display_name" name="display_name" placeholder="${user.display_name}">
            </div>
            <div class="user-profile__child row">
                <div class="profile-left">Телефон: </div> 
                <input class="profile-right" type="text" id="phone" name="phone" placeholder="${user.phone}">
            </div>
            
            <button id = 'profile-save' class="profile-button-save" onclick="window.location.href = '/profile'" type="button">Сохранить</button> 
            </div>
        </div> 
    </div>`);
}

export default ChangeData
