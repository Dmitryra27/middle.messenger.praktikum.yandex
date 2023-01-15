import './profile.css';

function ChangePassword() {
    return (
        `<div class="user-profile-container row" >
            <div class="user-profile__left">
                <div class="pointer profile-center"></div>
            </div>
            <div class="user-profile__right column">
                <div class="user-profile__foto-img"></div>
                <div class = 'user-profile-box column'>
    
                    <form method="POST" action="">
                        <div class="user-profile__child row margin30">
                            <label class="profile-left" for="password">Старый пароль:</label>
                            <input class='profile-right' type="password" id="password" name="password" placeholder="xxxx">
                        </div>
                        <div class="user-profile__child row margin30">
                        <label class="profile-left" for="password">Новый пароль:</label>
                        <input class='profile-right' type="password" id="password" name="password" placeholder="xxxx">
                        </div>
                        <div class="user-profile__child row margin30">
                        <label class="profile-left" for="password_confirm">Пароль еще раз:</label>
                        <input class='profile-right' type="password" id="password_confirm" name="password_confirm" placeholder="xxxx">
                        </div>
                        <input id='regButton' class="profile-button-save" onclick="window.location.href = '/profile'" type="button" value="Сохранить">
                    </form>
    
                </div>
            </div> 
        </div>`);
}

export default ChangePassword
