
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js',
    output:{
        path:__dirname + '/dist',
        publicPath:'/static/',
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: 'css-loader'
                            }),
                            stylus: ExtractTextPlugin.extract({
                                use: ["css-loader", "stylus-loader"]
                            })
                        }
                    }
                }
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                include: [ path.resolve(__dirname, "src")],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        // plugins: [require('@babel/plugin-transform-object-rest-spread')]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:["css-loader","postcss-loader"]

                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: [ "css-loader","postcss-loader", "stylus-loader"]
                })

            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'    // 将图片都放入images文件夹下，[hash:7]防缓存
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入fonts文件夹下
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: __dirname+"/index.html",
            hash:true,
            inject:'body',
            showErrors:true,
            chunks:['index']
        }),
        // new webpack.optimize.UglifyJsPlugin(
        //     {
        //         output: {
        //             comments: false,  // remove all comments
        //         },
        //         compress: {
        //             warnings: false,
        //                drop_console: true,
        //                pure_funcs: ['console.log']
        //
        //         }
        //     }
        // ),
        new ExtractTextPlugin({
            filename: "css/style.css"
        })
    ]
}