
module.exports = {
    // transpileDependencies: ['uview-ui'],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3005/api',
                changeOrigin: true,
                // rewrite: path => path.replace(/^\/api/, '/'),
            },
        },
    }
}
