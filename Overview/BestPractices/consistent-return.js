/**
 * require return statements to either always or never specify values
 * https://eslint.org/docs/rules/consistent-return
 */

// 👎
function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;
    }
}

// 👍
function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return false;
    }
}