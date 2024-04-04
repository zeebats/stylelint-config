/** @type {import('stylelint').Config} */
export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-html',
	],
	plugins: [
		'stylelint-order',
		'@stylistic/stylelint-plugin',
	],
	rules: {
		/**
		 * Stylelint
		 * @see https://stylelint.io/user-guide/rules
		 */

		/* Avoid errors - Descending */
		'no-descending-specificity': null,

		/* Avoid errors - Invalid */
		'declaration-no-important': true,

		/* Avoid errors - Unknown */
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

		/* Enforce conventions - Allowed, disallowed & required - Color */
		'color-named': 'never',

		/* Enforce conventions - Allowed, disallowed & required - Declaration */
		'declaration-property-value-disallowed-list': { '/^border/': ['none'] },

		/* Enforce conventions - Max & min */
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
		'number-max-precision': 6,
		'selector-max-compound-selectors': 3,
		'selector-max-id': 0,
		'selector-no-qualifying-type': [
			true,
			{ ignore: ['attribute'] },
		],

		/* Enforce conventions - Notation */
		'font-weight-notation': 'numeric',

		/* Enforce conventions - Pattern */
		'selector-class-pattern': [
			'^[a-z0-9\\-]+$',
			{ message: 'Selector should be written in lowercase with hyphens' },
		],

		/* Enforce conventions - Redundant */
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{ ignoreShorthands: ['/grid/'] },
		],

		/**
		 * stylelint-order
		 * @see https://github.com/hudochenkov/stylelint-order?tab=readme-ov-file#rules
		 */
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

		/**
		 * Stylelint Stylistic
		 * @see https://github.com/stylelint-stylistic/stylelint-stylistic/blob/main/docs/user-guide/rules.md
		 */

		/* Declaration block */
		'@stylistic/declaration-block-semicolon-newline-after': 'always',

		/* String */
		'@stylistic/string-quotes': 'single',

		/* General / Sheet */
		'@stylistic/indentation': 'tab',
		'@stylistic/max-line-length': null,
	},
};
