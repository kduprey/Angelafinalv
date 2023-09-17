module.exports = {
	extends: [
		"next/core-web-vitals",
		"prettier",
		"plugin:tailwindcss/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	plugins: ["tailwindcss", "unused-imports"],
	rules: {
		"tailwindcss/no-custom-classname": "off",
	},
	settings: {
		tailwindcss: {
			config: "tailwind.config.js",
		},
	},
};
