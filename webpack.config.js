const path = require('path');

module.exports = {
  entry: './src/index.js', // Modify this to your entry point
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devtool: false, // Disable source maps
  plugins: [],
};