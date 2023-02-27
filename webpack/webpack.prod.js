const path = require('path')
const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const prod = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          filename: '[name].[contenthash].bundle.js'
        }
      }
    }
  },
  plugins: [new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist/*.js')] })]
}

module.exports = merge(common, prod)
