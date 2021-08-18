/**
 * Disallow returning values from setters
 * https://eslint.org/docs/rules/no-setter-return
 */

// 👎
var foo = {
    set a(value) {
        this.val = value;
        return value;
    }
};

class Foo {
    set a(value) {
        this.val = value * 2;
        return this.val;
    }
}


// 👍
var foo = {
    set a(value) {
        this.val = value;
    }
};

class Foo {
    set a(value) {
        this.val = value * 2;
    }
}
