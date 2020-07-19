const path = require('path')
const webpack = require('webpack')

const config = (env, argv) => {
  return {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
      publicPath: '/'
    },
    resolve: {
      extensions: [".js"]
    }
  }
}

module.exports = config 