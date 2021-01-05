const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: ['./main.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode,
  devtool: mode === 'development' ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /dist/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      src: './src',
    },
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    // new webpack.SourceMapDevToolPlugin({}),
    new HtmlWebpackPlugin({
      template: 'main.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  experiments: {
    topLevelAwait: true,
  },
  devServer: {
    port: 9000, hot: true, https: true, open: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    },
  },
};
