const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        library: 'TimePicker',
        filename: "main.js",
        path: path.resolve(__dirname, "./dist"),
    },
    optimization: {
        minimize: false,
    },
    plugins: [ new HtmlWebpackPlugin({
        template: "./src/index.html",
    })],

}