const { createProxyMiddleware } = require("http-proxy-middleware") 
module.exports = function (app) { 
    app.use("/meisu",createProxyMiddleware({
        target: "https://api.yitianyishu.com",
        changeOrigin: true,
        pathRewrite: { 
            "^/meisu": "" 
        }
     }))
}