const path = require('path');
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
  }
}