const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //This property defines where the application starts
  // entry: './src/index.js',
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  //Setup loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // CSS loader here
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      // {
      //   test: /\.(svg|png|jpg|jpeg|gif)$/,
      //   // include: '.\src\Images\Saama-Logo.png',
      //   use: {
      //     loader: 'file-loader',
      //     // options: {
      //     //   name: '[path][name].[ext]',
      //     //   outputPath: ''
      //     // }
      //   }
      // }
      //   {
      //     test: /\.(png|jpg|gif)$/,
      //     use: [{
      //         loader: 'file-loader',
      //         options: {}
      //     }]
      // }
      // {test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=app/images/[name].[ext]"},
      // {
      //   test: /\.(s*)css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader']
      //   })
      // },
      // {
      //   test: /\.(png|jp(e*)g|svg)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 8000, // Convert images < 8kb to base64 strings
      //       name: 'images/[hash]-[name].[ext]'
      //     }
      //   }]
      // }
    ]
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
}