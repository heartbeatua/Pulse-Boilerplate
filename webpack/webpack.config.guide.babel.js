import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from './webpack.config.base';

const devMode = process.env.NODE_ENV !== 'production';

const config = {
  entry: {
    main: './styleguide/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: `js/[name]${!devMode ? '.[hash:8]' : ''}.js`,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './styleguide/public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new CopyWebpackPlugin([
      {
        from: './styleguide/public',
        to: './',
      },
    ]),
  ],
  devServer: {
    port: 6060,
    contentBase: path.join(__dirname, '../docs'),
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
  },
};

export default merge(baseConfig, config);
