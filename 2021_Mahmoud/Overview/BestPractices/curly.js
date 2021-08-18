/**
 * Require Following Curly Brace Conventions
 * https://eslint.org/docs/rules/curly
 */

// 👎
if (foo) foo++;

while (bar)
    baz();

if (foo) {
    baz();
} else qux();

// 👍
if (foo) {
    foo++;
}

while (bar) {
    baz();
}

if (foo) {
    baz();
} else {
    qux();
}