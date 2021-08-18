/**
 * Enforce "for" loop update clause moving the counter in the right direction. 
 * https://eslint.org/docs/rules/for-direction
 */

// 👎
for (var i = 0; i < 10; i--) {}

for (var i = 10; i >= 0; i++) {}

// 👍
for (var i = 0; i < 10; i++) {}