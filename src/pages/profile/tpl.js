const tpl = (user) =>
    `<main class="profile-container row">
        <div class="left">
        <div class="pointer"></div>
        </div>
        <div class="right column">
            <div class="image-box"></div>
            <div class="profile-title-display-name">${user.display_name}}</div>
            <div class="user-datas column">
                <div>Электронная почта: <span>${user.email}</span></div>
                <div>Имя пользователя: <span>${user.login}</span></div>
                <div>Фамилия: <span>${user.second_name}</span></div>
                <div>Имя: <span>${user.first_name}</span></ul>
                <div>Имя в чате: <span>${user.display_name}</span></ul>
                <div>Телефон: <span>${user.phone}</span></div>
            </div>
            <button id = 'change-login-btn' class="button blue" >Сменить данные пользователя</button>
            <button id = 'change-password-btn' class="button blue" >Сменить пароль</button>
            <button id = 'logout-btn' class="button red">Выйти</button> 
    
            </div>
        </div>
    </main>`

export default tpl;
