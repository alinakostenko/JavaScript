"use strict";

var userLogin = prompt("Введите логин");

if (userLogin == "Админ") {

    var password = prompt("Введите пароль");

    if (password == "Черный Властелин") {
        alert("Добро пожаловать!");
    } else if (password != null) {
        alert("Пароль неверен");
    } else {
        alert("Вход отменен");
    }

} else if (userLogin == null) {
    alert("Вход отменен");
} else {
    alert ("Я Вас не знаю");
}