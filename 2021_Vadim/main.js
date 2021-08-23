'use strict';

// TASK 1 Квартал года
// Учитывая месяц в виде целого числа от 1 до 12, вернитесь к тому кварталу года, к которому он относится, в виде целого числа.
// Например: месяц 2 (февраль) является частью первого квартала; месяц 6 (июнь) является частью второго квартала; и месяц 11 (ноябрь) является частью четвертого квартала.
// quarterOf(3) = 1
// quarterOf(8) = 3
// quarterOf(11) = 4

function quarterOf(month) {
    switch (month) {
        case (1, 2, 3):
            return 1;
        case (4, 5, 6):
            return 2;
        case (7, 8, 9):
            return 3;
        case (10, 11, 12):
            return 4;
        default:
            return console.log('Enter number of mounth');
    }
}

// TASK 2 Найдите наименьшее целое число в массиве
// findSmallestInt([78,56,232,12,8]) = 8
// findSmallestInt([78,56,232,12,18]) = 12
// findSmallestInt([78,56,232,412,228]) = 56
// findSmallestInt(56,232,1[78,2,0]) = 0
// findSmallestInt([1,56,232,12,8]) = 1

function findSmallestInt(list) {
    return list.reduce((previousValue, currentValue) =>
        previousValue < currentValue ? previousValue : currentValue
    );
}

// TASK 3 Перевернутые Слова (без использования .reverse метода)
// reverseWords("hello world!") = "world! hello"
// reverseWords("yoda doesn't speak like this") = "this like speak doesn't yoda"
// reverseWords("foobar") = "foobar"
// reverseWords("kata editor") = "editor kata"
// reverseWords("row row row your boat") =  "boat your row row row"

function reverseWords(str) {
    let result = [];
    str.split(' ').forEach((item) => result.unshift(item));
    return result.join(' ');
}
