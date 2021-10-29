/* eslint-disable unicorn/prefer-module */

module.exports = {
    extends: './',
    rules: {
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'local'],
            },
        ],
        'selector-type-no-unknown': [
            true,
            {
                ignore: ['custom-elements'],
                ignoreTypes: [/\^+/],
            },
        ],
    },
};

