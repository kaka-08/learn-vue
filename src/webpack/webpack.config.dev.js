const webpackConfig = require("./webpack.config.base");
const webpack = require("webpack");

//  process.env.NODE_ENV === "development"  环境为开发环境 

webpackConfig.target = "web";

webpackConfig.module.rules.push(
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
            {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  config: {
                    path: 'src/webpack/postcss.config.js'  // 这个得在项目根目录创建此文件
                  }
                }
              },
            { loader: 'less-loader' }                    
        ]
      }
);
webpackConfig.devtool = "#cheap-module-eval-source-map";
webpackConfig.devServer = {
    port:"8080",
    host:"0.0.0.0",
    overlay:{
        errors:true   //在编译的时候 有错误，则显示到控制台
    },
    hot:true,
    inline:true
};

webpackConfig.plugins.push(
    new webpack.NoEmitOnErrorsPlugin()  //跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
)

module.exports = webpackConfig;