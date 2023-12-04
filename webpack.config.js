const path = require('path'); // Node.js модуль для разрешения путей файлов
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true, // Очищает директорию dist перед обновлением бандла
  },
  module: {
    rules: [{
      test: /\.js$/, // маска для имени файла
      exclude: '/node_modules/', // исключаем папку
      loader: 'babel-loader', // какой загрузчик использовать
    }],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
