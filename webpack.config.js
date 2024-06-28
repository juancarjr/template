const path = require('path');
//externalizes css file
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//automates writing links between the index.html and dist files
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
    filename: '[name].bundle.js',
    // path.resolve finds the relative path of the dist directory
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000,
        hot: true
    },
    mode: 'development',
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
        ],
  },
     plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new HtmlWebpackPlugin({
            // title: '',
            template: './src/index.html',
        })
    ]
};
