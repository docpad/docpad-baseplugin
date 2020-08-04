'use strict'

const kava = require('kava')
const BasePlugin = require('./')

const opts = {
	config: {},
	docpad: {
		config: {
			plugins: {},
		},
		getEvents() {
			return []
		},
		mergeConfigs() {
			return {}
		},
	},
}

kava.suite('baseplugin', function (suite, test) {
	test('can instantiate', function () {
		const b = new BasePlugin(opts)
	})
})
