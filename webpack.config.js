const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

//import "firebase/auth";

module.exports = {
  devtool: 'eval',
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /・tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html")
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 2000
  }
}
