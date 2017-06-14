const entries = ["./src/js/index.js"]

module.exports = {
  entry: {
    'js/index': entries
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}
