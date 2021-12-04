const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin"); //关联js和html
module.exports = {
  mode: "development",
  //Using source maps
  // devtool: 'inline-source-map',
  devServer: {
    static: "./dist",
    hot: true,
  },
  //项目入口
  entry: {
    app: "./src/index.js",
  },
  //项目出口
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
  },
  //插件
  plugins: [
    //该snake游戏暂时不需要自动生成html
    // new HtmlWebpackPlugin({
    //   title: "Output Management",
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
