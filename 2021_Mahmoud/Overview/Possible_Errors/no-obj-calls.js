/**
 * disallow calling global object properties as functions
 * https://eslint.org/docs/rules/no-obj-calls
 */

// 👎
var math = Math();

var newMath = new Math();

var json = JSON();

var newJSON = new JSON();

// 👍
function area(r) {
    return Math.PI * r * r;
}

var object = JSON.parse("{}");