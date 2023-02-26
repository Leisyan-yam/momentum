module.exports = {
devtool: 'source-map',
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    comppressor: true,
    port: 3000,
  },

};