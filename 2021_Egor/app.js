// #1 Квартал года
// Учитывая месяц в виде целого числа от 1 до 12, вернитесь к тому кварталу года, к которому он относится, в виде целого числа.
function quarterOf(month) {
    const quarterYear = {
        1: [1, 2, 3],
        2: [4, 5, 6],
        3: [7, 8, 9],
        4: [10, 11, 12],
    };

    if (month > 0 && month < 13) {
        for (let key in quarterYear) {
            if (quarterYear[key].includes(month)) {
                return +key;
            }
        }
    }
    return false;
}


// #2 Найдите наименьшее целое число в массиве
function findSmallestInt(list) {
    return list.sort((a, b) => a - b)
        .filter(item => Number.isInteger(item))[0]
}


// #3 Перевернутые Слова (без использования .reverse метода)
function reverseWords(str) {
    let arr = str.split(' ');
    if (arr.length === 1) {
        return str;
    }
    let obj = {};
    arr.map((word, index) => (obj[index] = word));
    arr = Object.entries(obj)
        .sort((a, b) => b[0] - a[0])
        .map((item) => item[1])
        .join(' ');
    return arr;
}

module.exports = {
    quarterOf,
    findSmallestInt,
    reverseWords,
};
