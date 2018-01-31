const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");


const isDev = process.env.NODE_ENV === "development";

//  process.env.NODE_ENV === "development"  环境为开发环境 
const config = {
    target:"web",
    entry: path.resolve(__dirname,"index.js"),
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'bin')    //  path.resolve  绝对路径  path.join 相对路径 
    },
    devtool:"#cheap-module-eval-source-map",      //用于浏览器调试    
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
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                    },
                    { loader: 'less-loader' }                    
                ]
              },
            {   
                test: /\.jpeg|png|gif|jpg|svg/,
                use: [
                    { 
                      loader: 'url-loader',
                      options:{
                         limit:1024,
                         name:'[name]-aaa.[ext]'
                      }
                    }
                ]
            }
        ]
    },
    devServer:{
        port:"8080",
        host:"0.0.0.0",
        overlay:{
            errors:true   //在编译的时候 有错误，则显示到控制台
        },
        hot:true
    },
    plugins:[
        new webpack.DefinePlugin({
            "process-env":{
                NODE_ENV : isDev ? "'development'" : "'production'"
            }
        }),
        new webpack.HotModuleReplacementPlugin(),  //启动热加载   此时 devServer的hot为true
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})  //加载应用html魔板 
    ]
}



module.exports = config;