/**
 * Disallow multiple spaces
 * https://eslint.org/docs/rules/no-multi-spaces
 */

// 👎
var a =  1;

if(foo   === "bar") {}

a <<  b

var arr = [1,  2];

a ?  b: c

// 👍
var a = 1;

if(foo === "bar") {}

a << b

var arr = [1, 2];

a ? b: c