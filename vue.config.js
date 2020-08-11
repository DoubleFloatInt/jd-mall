const port = process.env.port || process.env.npm_config_port || 80 // 端口

module.exports = {
    publicPath: '/',
    devServer: {
        host: '0.0.0.0',
        port: port,
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            [process.env.VUE_APP_BASE_API]: {
                target: 'http://localhost:8888',
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },
}