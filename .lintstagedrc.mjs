export default {
	'**/*.?(m)js': filenames => `eslint ${filenames.join(' ')} --fix`,
	'package.json': 'npx sort-package-json',
};
