/**
 * disallow empty block statements
 * https://eslint.org/docs/rules/no-empty
 */

// 👎
if (foo) {
}

while (foo) {
}

switch(foo) {
}

try {
    doSomething();
} catch(ex) {

} finally {

}

// 👍
if (foo) {
    // empty
}

while (foo) {
    /* empty */
}

try {
    doSomething();
} catch (ex) {
    // continue regardless of error
}

try {
    doSomething();
} finally {
    /* continue regardless of error */
}