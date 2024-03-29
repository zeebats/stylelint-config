/* eslint-disable unicorn/prefer-module */

module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-html'],
	plugins: ['stylelint-order', 'stylelint-stylistic'],
	rules: {
		'color-named': 'never',
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{ ignoreShorthands: ['/grid/'] },
		],
		'declaration-no-important': true,
		'declaration-property-value-disallowed-list': { '/^border/': ['none'] },
		'font-weight-notation': 'numeric',
		'max-nesting-depth': [
			4,
			{
				ignore: ['pseudo-classes'],
				ignoreAtRules: [
					'media',
					'supports',
				],
			},
		],
		'no-descending-specificity': null,
		'number-max-precision': 6,
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
		'selector-class-pattern': [
			'^[a-z0-9\\-]+$',
			{ message: 'Selector should be written in lowercase with hyphens' },
		],
		'selector-max-compound-selectors': 3,
		'selector-max-id': 0,
		'selector-no-qualifying-type': [
			true,
			{ ignore: ['attribute'] },
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: [
					'global',
					'local',
				],
			},
		],
		'selector-type-no-unknown': [
			true,
			{
				ignore: ['custom-elements'],
				ignoreTypes: [/\^+/],
			},
		],
		'stylistic/declaration-block-semicolon-newline-after': 'always',
		'stylistic/indentation': 'tab',
		'stylistic/max-line-length': null,
		'stylistic/string-quotes': 'single',
	},
};
