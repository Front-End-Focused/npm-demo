/**
 * Disallow new For Side Effects
 * https://eslint.org/docs/rules/no-new
 */

// 👎
new Thing();

// 👍
var thing = new Thing();

Thing();
