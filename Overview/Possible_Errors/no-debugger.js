/**
 * disallow the use of debugger
 * https://eslint.org/docs/rules/no-debugger
 */

// 👎
function isTruthy(x) {
    debugger;
    return Boolean(x);
}

// 👍
function isTruthy(x) {
    return Boolean(x); // set a breakpoint at this line
}