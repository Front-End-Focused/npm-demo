// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
// "error" or 2 - turn the rule on as an error (exit code will be 1)

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": 'eslint:recommended',
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        'no-unused-vars': [OFF, { "vars": "all" }],
        'no-console': [ERROR, { allow: ['error'] }],
        'no-empty-function': [ERROR],
        'class-methods-use-this': [WARN],
        'accessor-pairs': [ERROR],

    }
};
