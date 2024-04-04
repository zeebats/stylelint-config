export default {
	'**/*.js': filenames => `eslint ${filenames.join(' ')} --fix`,
	'package.json': 'npx sort-package-json',
};
