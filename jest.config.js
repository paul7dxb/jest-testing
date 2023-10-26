module.exports = {
	testEnvironment: "node",
	roots: ["<rootDir>/test", "<rootDir>/lambda"],
	testMatch: ["**/*.{spec,test}.{js,ts}"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},

	// :: make sure this matches the `paths` setting in tsconfig.json
	moduleNameMapper: {
		"^@lambda/(.*)$": "<rootDir>/lambda/$1",
		"^@lib/(.*)$": "<rootDir>/lib/$1",
	},
};
