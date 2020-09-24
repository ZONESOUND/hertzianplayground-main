var path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: 'entry.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].js?[hash:5]'
  },
  devServer: {
    compress: true,
    port: 3000,
    stats: {
      assets: true,
      cached: false,
      chunkModules: false,
      chunkOrigins: false,
      chunks: false,
      colors: true,
      hash: false,
      modules: false,
      reasons: false,
      source: false,
      version: false,
      warnings: false
    }
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('src/js'),
      path.resolve('src/scss'),
      path.resolve('src/assets'),
      path.resolve('src/image'),
      path.resolve('node_modules')
    ],
    extensions: ['.js']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: [{
          loader: 'html-loader',
        }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // 加入 devMode 判斷切換
          'css-loader',
          'sass-loader',],
        include: path.resolve('src/scss'),
        exclude: path.resolve('./node_modules')
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        include: path.resolve('.')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: '[path][name].[ext]?[hash:5]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ],
        include: path.resolve('src/image'),
        exclude: path.resolve('./node_modules')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'en/index.html',
      template: 'en.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css?[hash:5]',
      chunkFilename: '[id].[hash:5].css'
    }),
    new OptimizeCssAssetsPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'assets',
        to: 'assets'
      }
    ]),
    new CleanWebpackPlugin()
  ]
};
