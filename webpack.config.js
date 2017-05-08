module.exports = {
  entry: './public/javascripts/index.jsx', // entry point
  output: {
    path: __dirname + '/public', // output files
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'] // расширения для загрузки модулей
  },
  module: {
    loaders: [{
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2017', 'react']
      }
    }]
  },
  watch: true
}
