const path = require('path');

module.exports = {
  output: {
    filename: 'main.js', // Rename the main output file
    path: path.resolve(__dirname, 'build'), // Adjust the output directory as needed
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Your CSS loader configuration
      },
    ],
  },
};
