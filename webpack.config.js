module.exports = {
  entry: './src/main.js',
  output: {
    filename: './lib/index.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exlucde: /node_modules/}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};