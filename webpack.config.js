const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require('webpack');
var path = require('path');



module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './js/bundle.js'
  },
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
          test: /\.scss$/,
          use: [
              MiniCssExtractPlugin.loader,
              "css-loader?url=false",
              "postcss-loader",
              "sass-loader"
          ]
        },
        {
          test: /.*\.(gif|png|jpe?g)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: './img/[name].[ext]',
                context: ''
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
        {
          test: /\.html$/,
          use:{
            loader: 'file-loader',
            options: {
              name: './[name].[ext]',
              context: ''
            }
          }
        },
        {
          test: /\.css$/,
          use:{
            loader: 'file-loader',
            options: {
              name: './css/[name].[ext]',
              context: ''
            }
          }
        },
        {
          test: /\.ttf$/,
          use:{
            loader: 'file-loader',
            options: {
              name: './fonts/[name].[ext]',
              context: ''
            }
          }
        }
      ]
  },


      plugins: [
        new CleanWebpackPlugin(['dist']),
            new MiniCssExtractPlugin({
        filename: "./css/[name].css",
        chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          Popper: 'popper.js'
        })
      ]

};
