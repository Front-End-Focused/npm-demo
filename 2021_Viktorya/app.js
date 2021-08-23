function quarterOf(month) {
    if (month > 0 && month <= 12) {
        return Math.ceil(month / 3)
    }
    return false
}

function findSmallestInt(list) {
    if (Array.isArray(list)) {
        return Math.min(...list)
    }
    return false
}

function reverseWords(str) {
    if (typeof str === 'string') {
        let arr = str.split(' ')
        let a = [];
        for (let i = 0; i < arr.length; i++) {
            a[i] = arr[(arr.length - 1) - i]
        }
        return a
    }
    return false
}