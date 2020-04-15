module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
    devServer: {
        host: '0.0.0.0', // 允许外部ip访问
        port: 8080, // 端口
        https: false, // 启用https
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '': {
                target: 'http://localhost:3000',
                changeOrigin: true // 允许跨域
            }
        }
    }
}