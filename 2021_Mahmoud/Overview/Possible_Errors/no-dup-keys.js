/**
 * disallow duplicate keys in object literals
 * https://eslint.org/docs/rules/no-dupe-keys
 */

// 👎
var foo = {
    bar: "baz",
    bar: "qux"
};

var foo = {
    "bar": "baz",
    bar: "qux"
};

// 👍
var foo = {
    bar: "baz",
    quxx: "qux"
};
