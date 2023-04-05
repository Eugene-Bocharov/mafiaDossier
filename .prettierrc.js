module.exports = {
	semi: true,
	useTabs: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'es5',
	overrides: [
		{
			files: '*.js',
			options: {
				trailingComma: 'all',
				singleQuote: true,
			},
		},
		{
			files: '*.jsx',
			options: { trailingComma: 'all', singleQuote: true },
		},
		{
			files: '*.ts',
			options: { trailingComma: 'all', singleQuote: true },
		},
		{
			files: '*.tsx',
			options: { trailingComma: 'all', singleQuote: true },
		},
	],
};
