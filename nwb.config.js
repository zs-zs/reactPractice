module.exports = {
	type: 'react-app',
	webpack: {
		extra: {
			devtool: '#inline-source-map'
		}
	},
	karma: {
		browsers: ['Chrome', 'Firefox', 'IE'],
		//browsers: ['IE8'],
		extra: {
			//singleRun: false,
			customLaunchers: {
				IE9: {
					base: 'IE',
					'x-ua-compatible': 'IE=EmulateIE9'
				},
				IE8: {
					base: 'IE',
					'x-ua-compatible': 'IE=EmulateIE8'
				}
			}
		},
		plugins: [
			require('karma-firefox-launcher'),
			require('karma-ie-launcher')
		]
	}
}
