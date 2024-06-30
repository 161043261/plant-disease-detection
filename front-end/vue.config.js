module.exports = {
    publicPath: './',
    parallel: false,
    devServer: {
        host: "0.0.0.0",
        port: 2022,
        proxy: {
            "baseUrl-1": {
                target: "http://localhost:2022",
                changeOrigin: true,
                secure: false
            },
            "baseUrl-2": {
                target: "http://localhost:2023",
                changeOrigin: true,
                secure: false
            },
        }
    }
}