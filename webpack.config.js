const config = {
  entry: './index.jsx',
  output: {
    path: 'assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: /node_modules/,
        query:
          {
            presets:['react']
          }
      },
    ],

  }
}

module.exports = config
