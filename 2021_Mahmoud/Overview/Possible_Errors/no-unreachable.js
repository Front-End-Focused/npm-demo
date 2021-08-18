/**
 * disallow unreachable code after return, throw, continue, and break statements
 * https://eslint.org/docs/rules/no-unreachable
 */

// 👎
function foo() {
    return true;
    console.log("done");
}

function bar() {
    throw new Error("Oops!");
    console.log("done");
}

while(value) {
    break;
    console.log("done");
}

throw new Error("Oops!");
console.log("done");

// 👍
function foo() {
    return bar();
    function bar() {
        return 1;
    }
}

function bar() {
    return x;
    var x;
}

