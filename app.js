/**
 * 
 * 
 * @date 前后端开发分离，代理工具
 * @author XU Kai(xukai.ken@gmail.com)
 * 
 */

var httpProxy = require('http-proxy');

var urls = require('./urls');

function run() {
  var proxy = httpProxy.createProxyServer({ target: urls.site });

  proxy.listen(8080);
}

module.exports.run = run;