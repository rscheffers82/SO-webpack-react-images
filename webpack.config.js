const path = require('path');

var BUILD_DIR = path.resolve( __dirname, 'src/client/public' );
var APP_DIR = path.resolve( __dirname, 'src/client/App' );

const config = {
  mode : 'development',
  entry : APP_DIR + '/index.jsx',
  output : {
    path : BUILD_DIR,
    filename : 'bundle.js'
  },
  devServer : {
    publicPath : '/',
    contentBase : './src/client'
  },
  module : {
    rules : [
      {
        test : /\.jsx|jsx?$/,
        include : APP_DIR,
        exclude : /(node_modules)/,
        use : {
          loader : 'babel-loader',
        }
      }, {
        test : /\.scss|.css$/,
        loaders : [ 'style-loader', 'css-loader', 'sass-loader' ]
      }, {
        test : /\.(png|jp(e*)g|svg)$/,
        use : [{
          loader : 'url-loader',
          options : {
            limit : 800,
            name : 'images/[hash]-[name].[ext]'
          }
        }]
      }, 
      // {
      //   test : /\.(png|jp(e*)g|svg)$/,
      //   use : {
      //     loader: "file-loader",
      //     options: {
      //       name: "images/[name].[hash].[ext]"
      //     }
      //   }
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: false,
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map'
};

module.exports = config;