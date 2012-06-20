/*!
 * Tumblr2 - JavaScript SDK for Tumblr API v2
 *
 * Copyright 2011-2012, Tetsuwo OISHI.
 * Dual license under the MIT license.
 * http://tetsuwo.tumblr.com
 *
 * Date: 2011-11-07
 */

function JsdoIt() {
    this.initialize.apply(this, arguments);
}

JsdoIt.prototype = {
    initialize: function(param) {
        this.output(param);
        this.api_url = 'http://api.jsdo.it/v0.2';
        this.times = 0;
        this.requests = [];
        this.data = [];
        this.debug = true;
        this.win = document.defaultView || document.parentWindow;
        this.name = 'jsdoit_api_v02';
        this.config = {
            username: null
        };
        if (param && param.usernname) {
            this.config.username = param.username;
        }
    },
    setUsername: function(val) {
        this.config.username = val;
    },
    output: function(val) {
        if (this.debug) {
            console.log(val);
        }
    },
    api: function(method, param, callback) {
        var callbackName = this.name + '_' + this.times;
        this.win[callbackName] = callback;

        param = param || [];
        param.push('callback=' + callbackName);

        this.requests[this.times] = {
            method: method,
            param: param,
            callback: callback,
            callbackName: callbackName
        };

        this.times++;

        (function(that, d, t) {
            var e = d.createElement(t);
            e.type = 'text/javascript';
            e.async = true;
            e.src = that.api_url + method + '.json?';
            e.src+= that.serialize(param);
            that.output(e.src);
            var s = d.getElementsByTagName(t)[0];
            s.parentNode.insertBefore(e, s);
        })(this, document, 'script');

        return this;
    }
};

JsdoIt.prototype.serialize = function(param, prefix) {
    var query = [];

    for(var p in param) {
        var k = prefix ? prefix + '[' + p + ']' : p, v = param[p];
        query.push(
            typeof v == 'object' ?
                this.serialize(v, k) :
                encodeURIComponent(k) + '=' + encodeURIComponent(v)
        );
    }

    return query.join('&');
};


var jsdoit = new JsdoIt();

jsdoit.api('/user/codes', {name: tetsuwo}, function(res) {
    alert('run [/user/codes]');
    console.log(res);
});
