/**
 * disallow the use of console
 * https://eslint.org/docs/rules/no-console
 */

// 👎
console.log("Log a debug level message.");
console.warn("Log a warn level message.");
console.error("Log an error level message.");

// 👍
// custom console
const log = console.log

log("Hello world!");