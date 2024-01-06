const path = require('path');

module.exports = {
  entry: './index-txVVMlHD.js', // The entry point of your application
  output: {
    filename: 'bundle.js', // The name of the output bundle file
    path: path.resolve(__dirname, 'widget'), // The output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use the style-loader and css-loader for CSS files
      },
    ],
  },
};
