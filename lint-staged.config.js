/* eslint-disable unicorn/prefer-module */

module.exports = {
    '*.js': 'npm run eslint:fix',
    'package.json': 'npx sort-package-json',
};
