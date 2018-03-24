const webpack = require("webpack"),
path = require("path");

module.exports ={
    entry:"./webpack.entry.js",
    output:{
        path:  path.resolve(__dirname, "public"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                use:"babel-loader",
                test:/\.js$/
            }
        ]
    }
}