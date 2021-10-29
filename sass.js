/* eslint-disable unicorn/prefer-module */

module.exports = {
    extends: './',
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-disallowed-list': ['debug'],
        'at-rule-no-unknown': null,
        'max-nesting-depth': [
            4,
            {
                ignore: [
                    'pseudo-classes',
                ],
                ignoreAtRules: [
                    'each',
                    'media',
                    'supports',
                    'include',
                ],
            },
        ],
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension-blacklist': ['scss'],
        'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
        'scss/selector-no-redundant-nesting-selector': true,
    },
};
