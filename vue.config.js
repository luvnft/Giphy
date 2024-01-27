const { defineConfig } = require('@vue/cli-service');
// const stream = require('stream-browserify');

module.exports = defineConfig({
  transpileDependencies: [], // Use an array if there are specific dependencies to transpile, or set it to true to transpile all
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
        stream: [require.resolve("stream-browserify")],
      },
    },
  },
});
