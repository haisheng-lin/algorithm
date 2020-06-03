// 如果 webpack.config.js 设置的 mode 是 production，则 env 就是 production
// 否则是 development
const env = process.env.NODE_ENV;

const entry =
  env === 'production'
    ? require('./dist/algorithm.min')
    : require('./dist/algorithm');

module.exports = entry;
