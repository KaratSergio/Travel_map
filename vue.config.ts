module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://back-for-vue-js.onrender.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
