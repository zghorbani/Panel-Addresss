const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  cache: false,
  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },
  output: {},
  resolve: {
    extensions: [".jsx", ".js", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.js|\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
          options: {}
        }
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3006
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mainApp",
      filename: "remoteEntry.js",
      remotes: {
        "converterApp":"converterApp@http:///localhost:3001/remoteEntry.js",
        "avalApp":"avalApp@http:///localhost:3002/remoteEntry.js",
        "neshanApp":"neshanApp@http:///localhost:3003/remoteEntry.js",
        "mapApp":"mapApp@http:///localhost:3004/remoteEntry.js",
      },
      exposes: {
        "./RemoteApp" : "./src/map.js",
      },

    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
