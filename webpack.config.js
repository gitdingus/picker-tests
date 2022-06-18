const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./docs"),
    },
    module: {
        rules: [
            {
                test: /\.png$/i,
                type: 'asset/resource'
            }
        ],
    },
    optimization: {
        minimize: false,
    },
    plugins: [ new HtmlWebpackPlugin({
        template: "./src/index.html",
    })],

}