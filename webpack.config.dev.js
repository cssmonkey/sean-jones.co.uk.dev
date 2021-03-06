var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'), 
    path = require('path'),
    srcPath = path.join(__dirname, '/src'),
    distPath = path.join(__dirname, '/dist'),
    pagesConfig = require('./pages.config'),
    dataSrc = require('./src/data/data');

const pluginsBaseConfig = [
    new webpack.DefinePlugin({
        LANG: JSON.stringify("en")
    }),
    new ExtractTextPlugin({
        filename: 'css/[name].css'
    }),
    new BrowserSyncPlugin({
        files: "dist/**/*.*",
        hostname: "localhost",
        port: 8080,
        server: { baseDir: ['dist'] },
        reloadDelay: 50,
        injectChanges: false,
        reloadDebounce: 500,
        reloadOnRestart: true
    })
]

const pagesPlugins = pagesConfig.map((item)=> {
    const filename = item.name === 'home' ? 'index.html' : `${item.name}.html`;
    const options = {
        title: item.title ? item.title : '',
        minify: false,
        filename: filename,
        template: `${srcPath}/views/pages/${item.name}.hbs`,
        data: dataSrc
    }
    return new HtmlWebpackPlugin(options);
});

const pluginsConfig = pluginsBaseConfig.concat(pagesPlugins);

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

    devServer: {
        contentBase: distPath,
        watchContentBase: true
    },

    module: {
        rules: [
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',    
                    publicPath: '../'
                  }
                }]
              },
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
            },
            {
                test: /\.hbs$/,
                include: srcPath,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'handlebars-loader',
                        query: {
                            partialDirs: [
                                srcPath + '/views/pages', srcPath + '/views/partials'
                            ]
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.json', '.hbs'],
        alias: {
            js: srcPath + '/js/',
            styles: srcPath + '/styles/'
        }
    },

    plugins: pluginsConfig
};