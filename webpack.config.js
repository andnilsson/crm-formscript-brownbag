var path = require('path');
const webpack = require('webpack');
var fs = require("fs");

module.exports = {
    entry: getEntryObject(),
    output: {
        filename: "./stq_/build/[name].js",
        library: '[name]',
        libraryTarget: 'var'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
        modules: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.ts(x)?$/,
            use: [
                {
                    loader: 'babel-loader',                    
                },
                {
                    loader: 'ts-loader'
                }
            ]
        },
        {
            test: /\.css$/,
            use: 'css-loader'
        },
        {
            test: /\.js$/,
            use: "source-map-loader",
            enforce: 'pre',
        },
        {
            test: /\.js$/,
            loader: 'babel-loader'
        }
        ],
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
}

function getEntryObject() {
    var entries = fs.readdirSync('./src/scripts/').filter(file => {
        return file.match(/.*\.ts$/);
    });

    var obj = {};

    entries.forEach(e => {
        obj[e.split('.ts')[0]] = ['babel-polyfill', `./src/scripts/${e}`]
    });
    return obj;
}