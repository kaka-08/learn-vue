const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractPlugin = require("extract-text-webpack-plugin"); 


 // const isDev = process.env.NODE_ENV === "development";

const webpackConfig = {
    entry: path.resolve(__dirname,"index.js"),
    output:{
        filename:"bundle.[hash:8].js",
        path:path.resolve(__dirname,'bin')    //  path.resolve  绝对路径  path.join 相对路径 
    },
    module:{
        rules:[
            { test: /\.vue$/, use: 'vue-loader' },
            { 
                test: /\.css$/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader',
                     options: {
                        modules: true
                      } 
                    }
                ] 
             },
             { 
                test: /\.jsx$/, 
                use:  'babel-loader' 
             },
             {
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
              },
            {   
                test: /\.jpeg|png|gif|jpg|svg/,
                use: [
                    { 
                      loader: 'url-loader',
                      options:{
                         limit:1024,
                         name:'[name].[ext]'
                      }
                    }
                ]
            }
        ]
    },
    plugins:[
        /*new webpack.DefinePlugin({
            "process-env":{
                NODE_ENV : isDev ? "'development'" : "'production'"
            }
        }),*/
        new HtmlWebpackPlugin({template: './src/index.html'}),  //加载应用html模板 
        new webpack.HotModuleReplacementPlugin()  //启动热加载   此时 devServer的hot为true        
    ],
    resolve:{
        extensions:['.vue','.js','.css','jsx','.less'] //自动补全识别后缀
    }
}

webpackConfig.plugins.push(
    new ExtractPlugin('styles.[chunkhash:8].css')
)

module.exports = webpackConfig;