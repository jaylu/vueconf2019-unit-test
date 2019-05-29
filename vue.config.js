// vue.config.js
module.exports = {
  publicPath: '',
  chainWebpack: config => {
    config
      .devServer
      .open(true)
      .proxy({
        '/api/v1/messages': {
          target: 'http://localhost:8099'
        }
      })
  }
}
