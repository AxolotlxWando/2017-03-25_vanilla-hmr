const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
// const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  context: path.resolve('lib'),
  entry: [
    /* enable react-hot-loader (e.g. for AppContainer, check prod/ dev mode) */
    'react-hot-loader/patch',

    /* inline mode */
    'webpack-dev-server/client?http://localhost:8080',

    /* ship hot reload library to client (success only) */
    'webpack/hot/only-dev-server',

    'index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('lib'),
      'node_modules'
    ],
    alias: {
      Lib: path.resolve('lib')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015', {'modules': false}], 'stage-2', 'react'],
            plugins: ['react-hot-loader/babel']
          }}
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new WriteFilePlugin(),
    new CopyWebpackPlugin([
      /* copies from /assets folder to output.path/assets folder */
      { context: path.resolve(''), from: 'assets', to: 'assets' },
      { context: path.resolve(''), from: 'lib/index.html', to: 'index.html' },
    ])
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve('dist')
  }
}
