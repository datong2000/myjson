module.exports = {
    plugins: {
        // css属性添加兼容前缀
        "autoprefixer": {
            // browsers: '> 1%'
        },
        // 全局默认字体大小
        'postcss-pxtorem': {
            rootValue: 16,
            propList: ['*']
        }
    }
}