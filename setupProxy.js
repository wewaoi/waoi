const { defineConfig } = require('react-scripts/config/webpack.config');

module.exports = defineConfig({
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/")
    };
    return config;
  }
});