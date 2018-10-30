const devMode = process.env.NODE_ENV !== 'production';

const config = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  devtool: devMode ? 'source-map' : false
};

module.exports = config;
