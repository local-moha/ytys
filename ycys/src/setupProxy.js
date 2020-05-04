const {createProxyMiddleware} =require('http-proxy-middleware')
module.exports= function(app){
    app.use('/api',createProxyMiddleware({
        target:'http://127.0.0.1',
        changeOrigin:true,
        pathRewrite:{
            '^/api':''
        }
    }));
    app.use('/minsu',createProxyMiddleware({
        target:"https://api.yitianyishu.com",
        changeOrigin:true,
        pathRewrite:{
            "^/minsu": ""
        }
    }));
  
    
}