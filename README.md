# Учебный проект Веб-чата

## Описание

### Готовность проекта

Проект находится в стадии разработки.

### В Третьем Спринте добавлено:

* В проект добавлен роутинг.
* Внедрен HTTP API чатов.
* Управление API происходит через контроллеры.
* Добавлена авторизация (регистрация, авторизация, выход из системы).
* Создан список чатов пользователя, добавлена возможность создавать чат, поиск чата по названию.
* Настроена отправка сообщений.
* Неавторизованный пользователь отправляется на страницу логина.
* Чаты добавляются в store.

### В Четвертом спринте добавлены:
    Webpack, написаны тесты

### Польза проекта

Проект является проектом с открытым кодом и после его доработки может быть использован в качестве чата компании или
сообщества.

### Установка проекта

1) Создание директории проекта

2) Клонирование проекта

3) Запуск

- `npm install` - установка зависимостей
- `npm run start` — запуск версии для разработчика,
- `npm run build` — сборка стабильной версии.

### Используемый стек технологий

HTML, CSS, SCSS, JS, Typescript, NodeJS, библиотеки : express.js, Parcel, Handlebars, linter, babel, Webpack

### Netlify

[Сайт на хостинге netlify.com](https://dreamy-cassata-053c4c.netlify.app/)

###Запуск тестов

npm run test

###Precommit. 

Установка хука husky - Git:
npm run prepare

###Docker

docker build -t messenger . docker run -dp 3000:3000 messenger
