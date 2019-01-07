var aliseListConfig = {
    index: {
        version: 1.0
    },
    common: {
        path: 'lib/common',
        version: 1.0
    }
}

var __baseVersion = '1.1.1';
var getVersion = function (curVersion) {
    return '?v=__' + __baseVersion + '__' + curVersion
}

var getAliasPaths = function () {
    var _obj = {};
    for (var i in aliseListConfig) {
        var _path = (aliseListConfig[i].path || i )+'.js';
        var _version = aliseListConfig[i].version || 1;
        _obj[i] = _path + getVersion(_version)
    }
    console.log(_obj)
    return _obj;
}

require.config({
    baseUrl: 'scripts/',
    paths: Object.assign({}, getAliasPaths()),
})