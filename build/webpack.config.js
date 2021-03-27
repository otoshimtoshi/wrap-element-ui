const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('./config')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '.',
    filename: 'wrap-element-ui.js',
    libraryExport: 'default',
    library: 'WrapElementPlus',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    modules: ['node_modules'],
  },
  externals: config.externals,
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          { loader: 'sass-resources-loader' },
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
}
