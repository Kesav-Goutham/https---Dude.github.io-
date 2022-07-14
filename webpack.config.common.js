var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  outputPath: "imgs",
                },
              },
        ],
        exprContextCritical: false

    }
};