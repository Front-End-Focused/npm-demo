/**
 * Enforces that a return statement is present in property getters
 * https://eslint.org/docs/rules/getter-return
 */

// 👎
const p = {
    get name(){
        // no returns.
    }
};

Object.defineProperty(p, "age", {
    get: function (){
        // no returns.
    }
});

class P{
    get name(){
        // no returns.
    }
}

// 👍
const p = {
    get name(){
        return; // return undefined implicitly.
    }
};