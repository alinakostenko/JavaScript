"use strict";

var minNum,
    maxNum;

do { minNum = +prompt('Введите только целое число, больше 1');
} while (minNum < 2 || isInt(minNum));

do { maxNum = +prompt('Введите только целое число, больше первого');
} while (minNum > maxNum || isInt(maxNum));

function isInt(n) {
    return n % 1 !== 0;
}

function isPrime(num) {

    for(var i = 2; i < num; i++) {

        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

function showPrimes(min, max){

    for (var i = min; i < max; i++) {

        if (isPrime(i)){
            console.log(i);
        }
    }
}
showPrimes(minNum, maxNum);