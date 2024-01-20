const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    // shop: './src/non-optimized/shop.js',
    shop: './src/optimized/shop.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
  },
  // devtool: 'cheap-source-map', // for prod
  devtool: 'source-map', // for prod test and performance check
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: { version: 3 } },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
