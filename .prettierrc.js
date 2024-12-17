// Import the default config file and expose it in the project root.
// Configure arrays to display each element on a new line
const config = {
	...require( '@wordpress/prettier-config' ),
	overrides: [
		{
			files: [ '*.json' ],
			options: {
				parser: 'json',
				printWidth: 1,
			},
		},
	],
};
// Useful for editor integrations.
module.exports = config;
