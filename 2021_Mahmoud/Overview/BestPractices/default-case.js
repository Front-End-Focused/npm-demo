/**
 * Require Default Case in Switch Statements
 * https://eslint.org/docs/rules/default-case
 */

// 👎
switch (a) {
    case 1:
        /* code */
        break;
}

// 👍
switch (a) {
    case 1:
        /* code */
        break;

    default:
        /* code */
        break;
}
