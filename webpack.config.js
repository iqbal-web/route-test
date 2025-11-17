const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin');

module.exports = {
	...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		new MomentTimezoneDataPlugin({
			// Include only specific years of timezone data to reduce bundle size
			startYear: 2020,
			endYear: 2030,
			
			// Include only specific timezones (optional)
			// If not specified, all timezones will be included
			matchZones: [
				'America/New_York',
				'America/Chicago',
				'America/Denver',
				'America/Los_Angeles',
				'Europe/London',
				'Europe/Paris',
				'Europe/Berlin',
				'Asia/Tokyo',
				'Australia/Sydney',
				// Add more zones as needed for your application
			],
			
			// Include only specific countries (optional)
			// This is an alternative to matchZones
			// matchCountries: ['US', 'CA', 'MX'],
		}),
	],
};