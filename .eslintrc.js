module.exports = {
	root: true,
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-native/all'
	],
	plugins: ['react', 'react-native', 'react-hooks', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		'ecmaFeatures': {
			'jsx': true
		}
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {}
		}
	},
	rules: {
		'indent': [2, 'tab', { 'SwitchCase': 1 }],
		'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
		'semi': 1,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
		'react-native/no-inline-styles': 0,
		'react-native/sort-styles': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'max-len': ['error', { 'code': 130, 'ignoreComments': true }],
		'jsx-quotes': ['error', 'prefer-single'],
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0
	}
};
