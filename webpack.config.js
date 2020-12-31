const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode,
  devtool: false,
  module:{
    rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  experiments: {
    topLevelAwait: true,
  },
  devServer: { port: 9000, hot: true, https: true, open: true },
};
