var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, '/src'),
    distPath = path.join(__dirname, '/dist');

module.exports = {
    context: srcPath,

    entry: {
        app: './js/app.js'
    },

    watch: true,
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: distPath,
        filename: 'js/[name].js',
    },

    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: srcPath,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            cache: true,
                            emitWarning: true,
                            configFile: '.eslintrc'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: (loader) => [
                                    require('autoprefixer')(),
                                ]
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            js: srcPath + '/js/',
            styles: srcPath + '/styles/'
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            LANG: JSON.stringify("en")
        })
    ]
};