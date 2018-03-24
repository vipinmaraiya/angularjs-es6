const webpack = require("webpack"),
path = require("path"),
ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports ={
    entry:"./webpack.entry.js",
    output:{
        path:  path.resolve(__dirname, "public"),
        filename:"bundle.js",
        publicPath:"public/"
    },
    module:{
        rules:[
            {
                use:"babel-loader",
                test:/\.js$/
            },
            {
                loader: ExtractTextWebpackPlugin.extract({
                    loader:["css-loader", "sass-loader"]
                }),
                test:/\.scss$/
            },
            {
                loader: ExtractTextWebpackPlugin.extract({
                    loader:["css-loader"]
                }),
                test:/\.css$/
            },
            {
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:40000
                        }
                    },
                    "image-webpack-loader"
                ]
                ,
                test:/\.(jpe?g|png|gif|svg)$/
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin("style.css")
    ]
}