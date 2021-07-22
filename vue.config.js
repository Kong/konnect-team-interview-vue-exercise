module.exports = {
  devServer: {
    port: 5001,
    proxy: 'http://localhost:4001',
  },
  transpileDependencies: [
    /@kongponents\/.*/,
  ]
}
