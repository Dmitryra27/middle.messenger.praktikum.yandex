const tpl = `
    <main class="login-container" >
        <div class="container__block">
            <div class="login-title"><span class="center">Вход</span>
            <form id='login-form' class='login-form' method="POST" >
                
                    <label class='login-label' for="login">Логин:</label>
                    <input class='login-input' type="text" id="login" name="login" autocomplete="login">
                
                <p id="error" class="login-form__error">Неверный логин</p>
                
                    <label class='login-label'  for="password">Пароль:</label>
                    <input  class='login-input' type="password" id="password" name="password" autocomplete="password">
                  
                <button id='authButton' class='login-button' onclick="window.location.href = '/'" type="button">Авторизоваться</button>
            </form>
        
            <a class = 'button_down' href='./register'>Нет аккаунта ? </a>
        </div>    
    </main>
`;

export default tpl;
