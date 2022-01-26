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
        test: /\.css$/i,
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
    port: 3003
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "neshanApp",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteApp" : "./src/Appneshan.js",
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
