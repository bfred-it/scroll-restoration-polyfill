'use strict';

var _preventPopstateScroll = require('prevent-popstate-scroll');

var canControlScrollRestoration = ('scrollRestoration' in window.history);

function init() {
	Object.defineProperty(history, 'scrollRestoration', {
		// enumerable: true,
		get: function get() {
			return _preventPopstateScroll.isPrevented;
		},
		set: function set(ScrollRestoration) {
			switch (ScrollRestoration) {
				case 'auto':
					(0, _preventPopstateScroll.allow)();break;
				case 'manual':
					(0, _preventPopstateScroll.prevent)();break;
			}
		}
	});
}

if (!canControlScrollRestoration) {
	init();
}

