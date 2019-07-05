const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
function tryResolve_(url, sourceFilename) {
    // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
    // when the importer throws
    try {
      return require.resolve(url, {paths: [path.dirname(sourceFilename)]});
    } catch (e) {
      return '';
    }
  }
  
  function tryResolveScss(url, sourceFilename) {
    // Support omission of .scss and leading _
    const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
    return tryResolve_(normalizedUrl, sourceFilename) ||
      tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
        sourceFilename);
  }
  
  function materialImporter(url, prev) {
    if (url.startsWith('@material')) {
      const resolved = tryResolveScss(url, prev);
      return {file: resolved || url};
    }
    return {file: url};
  }
module.exports = {
    devtool:'eval-source-map',
    entry:  [__dirname + "/app/main.scss",__dirname + "/app/main.js"],//已多次提及的唯一入口文件
    // entry:  __dirname + "/app/main.scss",
    output: {
        path: __dirname + "/build", //打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
        // filename:"bundle.css"
    },
    devServer: {
        contentBase:'./build',
        historyApiFallback:true,
        inline:true,
        hot:true
    },
    module: {
        rules: [{
            test:/(\.jsx|\.js)$/,
            use:{
                loader: "babel-loader",
                options: {
                    presets:[
                        "env","react"
                    ]
                }
            },
            exclude:/node_modules/
        },
            {
                test:/\.(css|scss|sass)$/,
                use:[{
                    loader:'style-loader'
                },
                {
                    loader: 'file-loader',
                    options: {
                      name: 'main.css',
                    },
                  },{
                    loader:'extract-loader',
                  },
                  {
                    loader: "css-loader",
                    // options: {
                    //     modules:true,// 指定启用css modules
                    //     localIdentName:'[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                    // }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        // importer: materialImporter
                        includePaths: ['./node_modules']
                    }
                  },
                  {
                    loader: "postcss-loader"
                },{
                    loader: "./app/rdp-loader.js"
                }],

            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:__dirname+'/app/index.tmpl.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),  //压缩代码插件
        new webpack.HotModuleReplacementPlugin(),  //热加载插件
        new CleanWebpackPlugin({
          dry: false,
        }),
    ]
}