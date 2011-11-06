function JsdoItAPIv02() {
    this.initialize.apply(this, arguments);
}
JsdoItAPIv02.prototype = {
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
            e.src = that.api_url + method + '.json?' + param.join('&');
            that.output(e.src);
            var s = d.getElementsByTagName(t)[0];
            s.parentNode.insertBefore(e, s);
        })(this, document, 'script');
    }
};

var jsdoit = new JsdoItAPIv02();

jsdoit.api('/user/codes', [ 'name=tetsuwo' ], function(res) {
    alert('run [/user/codes]');
    console.log(res);
});
