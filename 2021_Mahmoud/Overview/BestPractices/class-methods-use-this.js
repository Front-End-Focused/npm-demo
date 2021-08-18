/**
 * Enforce that class methods utilize this
 * https://eslint.org/docs/rules/class-methods-use-this
 */

// 👎
class A {
    foo() {
        console.log("Hello World");     /*error Expected 'this' to be used by class method 'foo'.*/
    }
}

// 👍
class A {
    foo() {
        this.bar = "Hello World"; // OK, this is used
    }
}

class A {
    constructor() {
        // OK. constructor is exempt
    }
}

class A {
    static foo() {
        // OK. static methods aren't expected to use this.
    }
}
