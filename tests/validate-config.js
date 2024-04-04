import assert from 'node:assert/strict';
import { it } from 'node:test';
import stylelint from 'stylelint';

import config from '../index.js';

it('loads config in stylelint to validate all rule syntax is correct', async () => {
	const results = await stylelint.lint({
		code: 'a {\n\tcolor: #000;\n\tz-index: 1;\n}\n',
		config,
	});

	assert.equal(results.errored, false, `
	Expected values to be strictly equal: \`results.errored === false\`

	Stylelint debug trace: ${JSON.stringify(JSON.parse(results.report), null, '\t')}
	`);
});
