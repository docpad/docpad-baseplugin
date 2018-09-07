'use strict'

const joe = require('joe')
const BasePlugin = require('./')

const opts = {
	config: {},
	docpad: {
		config: {
			plugins: {}
		},
		getEvents () {
			return []
		},
		mergeConfigs () {
			return {}
		}
	}
}

joe.suite('baseplugin', function (suite, test) {
	test('can instantiate', function () {
		const b = new BasePlugin(opts)
	})
})
