module.exports = {
  entry: './public/javascripts/app.js', // entry point
  output: {
    path: __dirname + './public/javascripts/static/', // output files
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
