const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, 'src/index'),
  },
  output: {
    filename: '[name].[chunkhash:8].js', // 输出文件名，其中 [name] 根据 entry 中的键值决定
    path: path.resolve(__dirname, 'dist'), // 输出路径
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
  resolve: {
    // 不加的话无法解析不带 '.ts' 扩展的路径
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      collections: path.resolve(__dirname, 'src/collections'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
