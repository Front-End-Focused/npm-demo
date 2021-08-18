/**
 * disallow duplicate arguments in function definitions
 * https://eslint.org/docs/rules/no-dupe-args
 */

// 👎
function foo(a, b, a) {
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};

// 👍
function foo(a, b, c) {
    console.log(a, b, c);
}

var bar = function (a, b, c) {
    console.log(a, b, c);
};