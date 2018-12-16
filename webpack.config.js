const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');



module.exports = {
    devServer: {
        watchContentBase: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }]
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          },
          {
            test: /.*\.(gif|png|jpe?g)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8000,
                  name: '/images/[name]_[sha512:hash:base64:7].[ext]'
                }
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  optipng: {
                    optimizationLevel: 7
                  },
                  pngquant: {
                    quality: '65-90'
                  },
                  mozjpeg: {
                    quality: 65
                  }
                }
              }
            ]

          },
        ],
    },


      plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
          template: "src/index.html",
          filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "src/about.html",
            filename: "./about.html"
        }),
            new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
        })
      ]

};
