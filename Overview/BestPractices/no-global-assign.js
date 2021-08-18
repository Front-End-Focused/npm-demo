/**
 * Disallow assignment to native objects or read-only global variables
 * https://eslint.org/docs/rules/no-global-assign
 */

// 👎
Object = null
undefined = 1
window = {}
length = 1
top = 1
a = 1

// 👍
var b = 1
b = 2