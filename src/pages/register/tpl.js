const tpl = `<main class="register-container">
    <div class="register-block">
    <div class="register-title"><span class="register-title-span">Регистрация</span></div>
    <form class="register-form" method="POST" action="/">
        <label class='register-label' for="email">Почта:</label><br>
        <input class="register-input" type="text" id="email" name="email" placeholder = "yakoro@gmail.com"><br>
        <label class='register-label' for="login">Логин:</label><br>
        <input class="register-input" type="text" id="login" name="login" placeholder ='ivanivanov'><br>
        <label class='register-label' for="first_name">Имя:</label><br>
        <input class="register-input" type="text" id="first_name" name="first_name" placeholder="Иван"><br>
        <label class='register-label' for="second_name">Фамилия:</label><br>
        <input class="register-input" type="text" id="second_name" name="second_name" placeholder="Иванов"><br>
        <label class='register-label' for="phone">Телефон:</label><br>
        <input class="register-input" type="text" id="phone" name="phone" placeholder="+7999 1111111"><br>
        <label class='register-label' for="password">Пароль:</label><br>
        <input class="register-input password" type="password" id="password" name="password" placeholder="********"><br>
        <label class='register-label' for="password_confirm">Пароль еще раз:</label><br>
        <input class="register-input password" type="password" id="password_confirm" name="password_confirm" placeholder="**********"><br>
        <p class="register-error-message">Пароли не совпадают</p>
        <input class='register-button' id='regButton' onclick="window.location.href = '/'" type="button" value="Зарегистрироваться">
    </form>
    <br>
    <a class="register-button-to-login" href="./login">Войти </a>
    </div>
</main>`

export default tpl;
