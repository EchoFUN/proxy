/**
 * 
 * 
 * @date 前后端开发分离，代理工具
 * @author XU Kai(xukai.ken@gmail.com)
 * 
 */

var httpProxy = require('http-proxy');

var urls = require('./urls'), header = require('./header');

function run() {
  var proxy = httpProxy.createProxyServer({
    target: urls.site
  });

  proxy.on('proxyReq', function (proxyReq, req, resp, options) {
    
    for(var i in header) {
      if (header.hasOwnProperty(i)) {
        proxyReq.setHeader(i, header[i]);

        req.headers[i] = header[i];
      }
    }
    
  });

  proxy.on('proxyRes', function (proxyRes, req, resp) {
    
    console.log('hello, world !');
    
  });

  proxy.listen(8080);
}

module.exports.run = run;