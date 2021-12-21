/* eslint-disable unicorn/prefer-module */

const stylelint = require('stylelint');
const test = require('tape');
const config = require('../index');

test('load config in stylelint to validate all rule syntax is correct', async t => {
    const results = await stylelint.lint({
        code: 'a {\n    color: #000;\n    z-index: 1;\n}\n',
        config,
    });

    t.false(results.errored);
    t.end();

    if (results.errored) {
        t.comment(results.output);
    }
});
