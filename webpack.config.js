module.exports = {
  mode: 'development',
  entry: {
    webpack: './webpack.js',
    js: './js/feather.js'
  },
  output: {
    filename: 'webpack.bundle.js',
    path: __dirname + '/js'
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] },
      { test: /\.m?js$/, 
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        } 
      } 
    }
    ]
  }
};