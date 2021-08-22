// TODO: eslint + prettier примеры
function quarterOf(month) {

    if (month <= 3) {
        console.log('1');
    } else if (month <= 6) {
        console.log(2);

    } else if (month <= 9) {
        console.log(3);
    } else if (month <= 12) {
        console.log(4);
    }
}


function findSmallestInt(list) {

    let minVal = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] < minVal) {
            minVal = list[i];
        }
    } return minVal
}

let newArr = new Array;
function reverseWords(str) {
    var res = str.split(" ")
    while (res.length != 0) {
        newArr.push(res.pop());
    }
    console.log(newArr);
}