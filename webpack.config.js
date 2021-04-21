const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(@lion)\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          
            plugins: [
              ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [{
          loader: 'lit-scss-loader',
          options: {
            minify: true, // defaults to false
          },
        }, 
        'extract-loader', 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
        use: {
          loader: 'file-loader',
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: 'index.html'
    }),
  ],
};