/* eslint-disable unicorn/prefer-module */

module.exports = {
    extends: ['stylelint-config-standard'],
    overrides: [
        {
            customSyntax: 'postcss-html',
            files: ['*.vue', '**/*.vue'],
        },
    ],
    plugins: ['stylelint-order'],
    rules: {
        'at-rule-no-vendor-prefix': true,
        'color-named': 'never',
        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                ignoreShorthands: ['/grid/'],
            },
        ],
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-no-important': true,
        'declaration-property-value-disallowed-list': {
            'border': ['none'],
            'border-bottom': ['none'],
            'border-left': ['none'],
            'border-right': ['none'],
            'border-top': ['none'],
        },
        'font-family-name-quotes': 'always-where-recommended',
        'font-weight-notation': 'numeric',
        'function-url-quotes': 'always',
        'indentation': 4,
        'max-nesting-depth': [
            4,
            {
                ignore: [
                    'pseudo-classes',
                ],
                ignoreAtRules: [
                    'media',
                    'supports',
                ],
            },
        ],
        'media-feature-name-no-vendor-prefix': true,
        'no-descending-specificity': null,
        'order/order': [
            [
                'custom-properties',
                'dollar-variables',
                {
                    name: 'extend',
                    type: 'at-rule',
                },
                {
                    hasBlock: false,
                    name: 'include',
                    type: 'at-rule',
                },
                'declarations',
                {
                    hasBlock: true,
                    name: 'include',
                    type: 'at-rule',
                },
                'rules',
            ],
        ],
        'order/properties-alphabetical-order': true,
        'property-no-vendor-prefix': true,
        'selector-class-pattern': [
            '^[a-z0-9\\-]+$',
            {
                message: 'Selector should be written in lowercase with hyphens (selector-class-pattern)',
            },
        ],
        'selector-max-compound-selectors': 3,
        'selector-max-id': 0,
        'selector-no-qualifying-type': true,
        'selector-no-vendor-prefix': true,
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
        'shorthand-property-no-redundant-values': true,
        'string-quotes': 'single',
        'value-no-vendor-prefix': true,
    },
};
