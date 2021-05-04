const nodeExternals = require('webpack-node-externals');
const serverlessWebpack = require('serverless-webpack');

module.exports = {
  target: 'node',
  mode: 'none',
  entry: serverlessWebpack.lib.entries,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
        loader: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: false,
  },
  devtool: 'inline-cheap-module-source-map',
};