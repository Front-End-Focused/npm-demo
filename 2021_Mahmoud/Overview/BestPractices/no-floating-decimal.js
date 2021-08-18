/**
 * Disallow Floating Decimals 
 * https://eslint.org/docs/rules/no-floating-decimal
 */

// 👎
var num = .5;
var num = 2.;
var num = -.7;

// 👍
var num = 0.5;
var num = 2.0;
var num = -0.7;