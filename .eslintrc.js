module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "commonjs":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "plugins":[
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier":"warn",
        "no-unused-vars": ['warn'],
        "no-console":"off",
        "@typescript-eslint/no-explicit-any":0
    }
};