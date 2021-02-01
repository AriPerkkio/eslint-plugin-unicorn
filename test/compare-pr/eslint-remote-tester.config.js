'use strict';
const baseConfig = require('../smoke/eslint-remote-tester.config');

module.exports = {
	...baseConfig,
	repositories: baseConfig.repositories.slice(0, 200),
};
