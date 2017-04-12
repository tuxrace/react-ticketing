module.exports = {
  entry: [
    { add: './src/index.js' },
    { vendor: ['react', 'react-dom'] },
  ],
  output: { filename: __dirname + '/' + [name].build.js },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}