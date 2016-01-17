var path = require('path');

var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: "vendor"
});


module.exports = {
  //context: path.resolve('app'),
  /*entry: './app.js',*/
  entry: {
    vendor: ["react", "react-dom","jquery"],
    bundle: path.resolve(__dirname, "app/app.js")
  },
  /*externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },*/
  devServer: {
    contentBase: 'public'
  },
  output: {
    path: path.resolve('dist/'),
    publicPath: '/public/assets/',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      include: [
        path.resolve(__dirname, "node_modules/shared-react"),
        path.resolve(__dirname, "app"),
      ],
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.(css|scss)$/,
      include: [
        path.resolve(__dirname, "node_modules/shared-react"),
        path.resolve(__dirname, "app"),
      ],
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  plugins: [
    commonsChunkPlugin,
    new ExtractTextPlugin("css/bundle.css")
  ]
};
