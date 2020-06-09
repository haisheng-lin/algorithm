const path = require('path');
const fs = require('fs');
const glob = require('glob');

const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// src 下的文件夹用 webpack alias 处理
const folderPaths = glob
  .sync(path.resolve(__dirname, 'src/*'))
  .filter(str => fs.lstatSync(str).isDirectory());

const aliasMap = folderPaths.reduce((map, folderPath) => {
  const lastIndex = folderPath.lastIndexOf('/');
  const folderName = folderPath.substring(lastIndex + 1);
  if (folderName) {
    map[folderName] = folderPath;
  }

  return map;
}, {});

module.exports = {
  mode: 'none',
  entry: {
    algorithm: path.resolve(__dirname, 'src/index'),
    'algorithm.min': path.resolve(__dirname, 'src/index'),
  },
  output: {
    filename: '[name].js', // 输出文件名，其中 [name] 根据 entry 中的键值决定
    library: 'algorithm', // 库名称
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'), // 输出路径
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
  resolve: {
    // 不加的话无法解析不带 '.ts' 扩展的路径
    extensions: ['.ts', '.tsx', '.js'],
    alias: aliasMap,
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
};
