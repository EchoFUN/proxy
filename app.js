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
  var proxy = httpProxy.createProxyServer({ 
    target : urls.site,
    toProxy : true 
  });

  proxy.on('proxyReq', function(proxyReq, req, resp, options) {
    proxyReq.setHeader('Cookie', 'wmempid=26801; ssoid=21dc622a22a74c51b597ba41683de677; skmtutc=vZ+/5C2BXE9R13FSuMvPcstOoz5JSpYwokKu2PkIj+Guy50cEwZR7+pt0DYuCs30-1zRLt5AmL4+T2zEaA58FmchlwKg=; JSESSIONID=y5n7ltw0hczn1l8z7hsbg6rad; _ga=GA1.2.1839063757.1441533417; _g');
    
    // proxyReq.setHeader('Host', 'develop.waimai.honeycomb.test.sankuai.info');
  });
  
  proxy.on('proxyRes', function(proxyRes, req, resp) {
    
  });

  proxy.listen(8080);
}

module.exports.run = run;