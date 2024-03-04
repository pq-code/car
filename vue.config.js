
module.exports = {
    // transpileDependencies: ['uview-ui'],
    devServer: {
        proxy: {
            '/wx/users': {
                target: 'http://localhost:4005/',
                changeOrigin: true,
                // rewrite: path => path.replace(/^\/api/, '/'),
            },
			'/wx/project': {
			    target: 'http://localhost:3005/',
			    changeOrigin: true,
			    // rewrite: path => path.replace(/^\/wx/project/, '/'),
			},
        },
    }
}
