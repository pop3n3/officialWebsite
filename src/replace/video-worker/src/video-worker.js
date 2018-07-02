'use strict';

var _global = require('global');

var _global2 = _interopRequireDefault(_global);

var _videoWorker = require('./video-worker.esm');

var _videoWorker2 = _interopRequireDefault(_videoWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_global2.default.VideoWorker = _videoWorker2.default;