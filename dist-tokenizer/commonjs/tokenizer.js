'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function ajax(url, callback, data, x) {
    try {
        x = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
        x.open(data ? 'POST' : 'GET', url, 1);

        x.setRequestHeader('Content-type', 'application/json');
        x.onreadystatechange = function () {
            x.readyState > 3 && callback && callback(x.responseText, x);
        };
        x.send(data);
    } catch (e) {
        window.console && console.log(e);
    }
}

var host = 'https://tk.secupay.ag';

var Tokenizer = (function () {
    function Tokenizer() {
        _classCallCheck(this, Tokenizer);
    }

    Tokenizer.prototype.createToken = function createToken(payload, handler) {

        var _handler = function _handler(responseText, xhr) {
            responseText && handler && handler(JSON.parse(responseText), xhr);
        };

        ajax(host + '/create', _handler, payload);
    };

    return Tokenizer;
})();

var SecucardTokenizer = {
    description: 'SecucardTokenizer for browser'
};

SecucardTokenizer.create = function () {

    return new Tokenizer();
};

exports['default'] = SecucardTokenizer;
module.exports = exports['default'];