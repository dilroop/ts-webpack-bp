const path = require('path');

module.exports = {
  entry: './app/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
		publicPath: 'app/webpack/',
		path: __dirname + "/app/webpack"
  },
  mode: 'development',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    noParse: [/[\/\\]node_modules[\/\\]object-hash[\/\\]dist[\/\\]object_hash\.js$/],
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, 'app')],
      },
      {
        test: /\.xml$/,
        use: 'raw-loader',
        include: [path.resolve(__dirname, 'app')],
      }
    ],
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    inline: true,
  },
};
