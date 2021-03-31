const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
    // 入口        __dirname 是当前文件所在目录
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },

            // 将小于1024的图片装换为Base64,减少http请求
            {
                test: /\.(gif|jpg|jpeg|svg|png)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],

    optimization: {
        splitChunks: {
            name: 'vendor'
        },
        runtimeChunk: {
            name: 'runtime'
        },
    }
}

if (isDev) {
    config.module.rules.push({
        // css 预处理器 使用模块化方式写css代码
        // stylus-loader专门用来处理stylus文件，处理好后变成.css文件，交给css-loader。webpack的loader就是这样一级一级的向上处理，每一层loader只处理自己关心的部分
        test: /\.styl$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
    },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        })
    config.devtool = isDev ? false : '#cheap-module-eval-source-map',
        config.devServer = {
            port: 8000,
            host: '0.0.0.0',
            overlay: {
                errors: true,
            },
            hot: true
        }
    // 热替换模块 - 只刷新局部组件的内容，不会刷新整个页面
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else {
    // 单独打包类库 需要使用chunkhash
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push({
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
    })
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'styles.[contentHash:8].css',
            chunkFilename: '[id].css',
        }),
    )
}

module.exports = config;