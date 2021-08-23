
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
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-unused-vars": [WARN, {'vars': "all"}],
        "no-console": [WARN,  {allow: ["warn", "error"]}],
        "quotes": [ERROR, 'single'],
    }
};
