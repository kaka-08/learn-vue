const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


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
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            
                        }
                    },
                    {
                        loader: 'iview-loader',
                        options: {
                            prefix: false
                        }
                    }
                ]
            },
            { 
                test: /\.css$/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader',
                     options: {
                        modules: false,   //默认 false
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
                         name:'src/[name].[ext]'
                      }
                    }
                ]
            },
            { test: /\.(eot|svg|ttf|woff|woff2)\w*/, use: "file-loader" },
            {
              test: /\.html$/, use: 'html-withimg-loader'
            }
        ]
    },
    plugins:[
        /*new webpack.DefinePlugin({
            "process-env":{
                NODE_ENV : isDev ? "'development'" : "'production'"
            }
        }),*/
        // new CopyWebpackPlugin([{
        //     from: root + '/src/assets'
        // }]),
        new HtmlWebpackPlugin({template: 'src/index.html'}),  //加载应用html模板 
        new webpack.HotModuleReplacementPlugin(),  //启动热加载   此时 devServer的hot为true 
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }) 
    ],
    resolve:{
        modules: ['src','node_modules'],    //直接访问绝对路径，，，和 alias有一样指出，后有alias先有modules
        extensions:['.vue','.js','.css','jsx','.less'], //自动补全识别后缀 
        alias: {
            '@': path.resolve(root, 'src'),
            'jquery': 'jquery' 
          }
    }
}

module.exports = webpackConfig;