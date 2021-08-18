/**
 * enforce default parameters to be last
 * https://eslint.org/docs/rules/default-param-last
 */

// 👎
function f(a = 0, b) {}

function f(a, b = 0, c) {}

// 👍
function f(a, b = 0) {}