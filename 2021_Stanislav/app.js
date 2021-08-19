/**
 #1 Квартал года
 Учитывая месяц в виде целого числа от 1 до 12, вернитесь к тому кварталу года, к которому он относится, в виде целого числа.

 Например: месяц 2 (февраль) является частью первого квартала; месяц 6 (июнь) является частью второго квартала; и месяц 11 (ноябрь) является частью четвертого квартала.

 quarterOf(3) = 1
 quarterOf(8) = 3
 quarterOf(11) = 4
 */
function quarterOf(month) {
    return Math.ceil(month/3);
}

/**
 #2 Найдите наименьшее целое число в массиве

 findSmallestInt([78,56,232,12,8]) = 8
 findSmallestInt([78,56,232,12,18]) = 12
 findSmallestInt([78,56,232,412,228]) = 56
 findSmallestInt([78,56,232,12,0]) = 0
 findSmallestInt([1,56,232,12,8]) = 1
 */
function findSmallestInt(list) {
    list.sort(function (a,b){
        return a-b;
    });
    return list[0];
}

/**
 #3 Перевернутые Слова (без использования .reverse метода)

 reverseWords("hello world!") = "world! hello"
 reverseWords("yoda doesn't speak like this") = "this like speak doesn't yoda"
 reverseWords("foobar") = "foobar"
 reverseWords("kata editor") = "editor kata"
 reverseWords("row row row your boat") =  "boat your row row row"
 */
function reverseWords(str){
    str = str.split(' ');
    console.log(str);
    let i = 0;
    let j = str.length - 1;
    let n = Math.floor(str.length / 2);
    console.log(n);
    for(i , j; i < n; i++, j--){
        [str[i] , str[j]] = [str[j], str[i]];
        console.log(str);
    }
    return str.join(' ');

}

module.exports = {
    quarterOf,
    findSmallestInt,
    reverseWords,
}

console.log(findSmallestInt([78,56,232,12,8]))
console.log(reverseWords("yoda doesn't speak like that"));