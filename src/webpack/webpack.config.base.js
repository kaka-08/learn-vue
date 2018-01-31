const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");


 // const isDev = process.env.NODE_ENV === "development";
const root = process.cwd();    // 取项目的根目录     __dirname 是取当前文件所在的目录

const webpackConfig = {
    entry: path.resolve(root,"src/index.js"),
    output:{
        filename:"bundle.[hash:8].js",
        path:path.resolve(root,'bin')    //  path.resolve  绝对路径  path.join 相对路径 
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
    plugins:[
        /*new webpack.DefinePlugin({
            "process-env":{
                NODE_ENV : isDev ? "'development'" : "'production'"
            }
        }),*/
        new HtmlWebpackPlugin({template: 'src/index.html'}),  //加载应用html模板 
        new webpack.HotModuleReplacementPlugin()  //启动热加载   此时 devServer的hot为true        
    ],
    resolve:{
        extensions:['.vue','.js','.css','jsx','.less'] //自动补全识别后缀
    }
}

module.exports = webpackConfig;