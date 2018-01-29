const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractPlugin = require("extract-text-webpack-plugin"); 
const webpackConfig = require("./webpack.config.base");

webpackConfig.entry = {
	app:path.resolve(__dirname,"index.js"),
	vendor:["vue"]   //数组可以扩展，按照模块打包
};
webpackConfig.output.filename = "[name].[chunkhash:8].js";

webpackConfig.module.rules.push({
                test: /\.less$/,
                use: ExtractPlugin.extract({
                    fallback:'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                              sourceMap: true,
                              config: {
                                path: 'src/postcss.config.js'  // 这个得在项目根目录创建此文件
                              }
                            }
                          },
                        { loader: 'less-loader' }                    
                    ]
                })   
              });
webpackConfig.plugins = [
    new HtmlWebpackPlugin({template: './src/index.html'}),  //加载应用html模板 
	new ExtractPlugin('styles.[chunkhash:8].css'),
	new webpack.optimize.CommonsChunkPlugin({
		name:"vendor"
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name:"runtime"
	})
];

webpackConfig.devtool = "#cheap-module-eval-source-map";
webpackConfig.devServer = {
    port:"8081",
    host:"0.0.0.0",
    overlay:{
        errors:true   //在编译的时候 有错误，则显示到控制台
    },
    hot:true,
    inline:true
};

module.exports = webpackConfig;