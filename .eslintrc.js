module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "off",
        "no-caller": "off",
        "no-case-declarations": "error",
        "no-catch-shadow": "off",
        "no-class-assign": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "off",
        "no-console": "off",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-continue": "off",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "off",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "off",
        "no-else-return": "off",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "off",
        "no-empty-pattern": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "off",
        "no-extra-bind": "off",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "off",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "off",
        "no-func-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "error",
        "no-iterator": "off",
        "no-label-var": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-lonely-if": "off",
        "no-loop-func": "off",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "off",
        "no-multiple-empty-lines": "off",
        "no-native-reassign": "off",
        "no-negated-condition": "off",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "off",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "off",
        "no-param-reassign": "off",
        "no-path-concat": "error",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "off",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
        "no-restricted-syntax": [
            "error",
            "WithStatement"
        ],
        "no-return-assign": "error",
        "no-script-url": "off",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-whitespace-before-property": "error",
        "no-spaced-func": "error",
        "no-sparse-arrays": "error",
        "no-sync": "off",
        "no-ternary": "off",
        "no-trailing-spaces": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "off",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-unexpected-multiline": "error",
        "no-underscore-dangle": "off",
        "no-unmodified-loop-condition": "off",
        "no-unneeded-ternary": "off",
        "no-unreachable": "error",
        "no-unsafe-finally": "off",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-unused-vars": "error",
        "no-use-before-define": "error",
        "no-useless-call": "off",
        "no-useless-computed-key": "off",
        "no-useless-concat": "off",
        "no-useless-constructor": "off",
        "no-useless-escape": "off",
        "no-useless-rename": "off",
        "no-void": "off",
        "no-var": "off",
        "no-warning-comments": "off",
        "no-with": "error",
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "array-callback-return": "error",
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "accessor-pairs": "off",
        "block-scoped-var": "error",
        "block-spacing": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "callback-return": "off",
        "camelcase": "off",
        "comma-dangle": "error",
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": [
            "error",
            20
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "consistent-return": "off",
        "consistent-this": "off",
        "constructor-super": "error",
        "curly": [
            "error",
            "all"
        ],
        "default-case": "off",
        "dot-location": "off",
        "dot-notation": "error",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "always"
        ],
        "func-names": "off",
        "func-style": "off",
        "generator-star-spacing": "off",
        "global-require": "error",
        "guard-for-in": "off",
        "handle-callback-err": "off",
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "indent": [
            "error",
            4
        ],
        "init-declarations": "off",
        "jsx-quotes": "off",
        "key-spacing": [
            "error",
            {
                "mode": "strict",
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "linebreak-style": "off",
        "lines-around-comment": "off",
        "max-depth": [
            "error",
            4
        ],
        "max-len": [
            "error",
            120
        ],
        "max-lines": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": [
            "error",
            30
        ],
        "max-statements-per-line": "off",
        "new-cap": "error",
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "object-property-newline": "off",
        "object-shorthand": "off",
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": "off",
        "operator-assignment": "off",
        "operator-linebreak": [
            "error",
            "after"
        ],
        "padded-blocks": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "radix": "off",
        "require-jsdoc": "off",
        "require-yield": "off",
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "sort-imports": "off",
        "sort-vars": "off",
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "off",
        "strict": "off",
        "template-curly-spacing": "off",
        "unicode-bom": "off",
        "use-isnan": "error",
        "valid-jsdoc": "error",
        "valid-typeof": "error",
        "vars-on-top": "off",
        "wrap-iife": [
            "error",
            "inside"
        ],
        "wrap-regex": "off",
        "yield-star-spacing": "off",
        "yoda": "error"
    }
};