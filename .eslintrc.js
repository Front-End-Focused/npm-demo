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
        'no-unused-vars': [OFF, { "vars": "all" }],
        'no-console': [OFF],
        'no-empty-function': [OFF],
        "class-methods-use-this": [OFF],
        "accessor-pairs": [OFF],
    }
};
