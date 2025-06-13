const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports= () => {
    // path is at ../trz-common/.env
    const envPath = path.resolve(__dirname, '.env');
    const envVars = require('dotenv').config({ path: envPath }).parsed || {};

    return {
        mode: "development", 
        entry: path.resolve(__dirname, "src/index.tsx"),
        output: {
            path: path.resolve(__dirname, "public"),
            filename: "bundle.js",
            publicPath: "/",
        },
        devServer: {
            port: "8080",
            historyApiFallback: true,
            static: path.resolve(__dirname, "public"),
            liveReload: true
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts','.tsx','.js'],
            modules: ['node_modules'],
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            }
        },
        module:{
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use:  'babel-loader'
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html')
            }),
            new Dotenv({
                path: envPath
            })
        ],
        optimization: {
            moduleIds: 'deterministic',
        },
    }
}