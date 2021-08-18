/**
 * Limit Cyclomatic Complexity
 * https://eslint.org/docs/rules/complexity
 */

// 👎
function a(x) {
    if (true) {
        return x;
    } else if (false) {
        return x+1;
    } else {
        return 4; // 3rd path
    }
}

// 👍
function a(x) {
    if (true) {
        return x;
    } else {
        return 4;
    }
}