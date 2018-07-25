"use strict";

var min = +prompt('Начало отсчета');
var max = +prompt('Конец отсчета');

isSimple:
    for (var i = min; i <= max; i++) {
        if (min < 2) {
            alert('Ошибка! Введите число, больше 1');
        break;
        }
            for (var j = 2; j < i; j++) {
            if (i % j === 0) continue isSimple;
            }

        console.log( i );
    }
