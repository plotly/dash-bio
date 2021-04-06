const path = require('path');
const webpack = require('webpack');
const WebpackDashDynamicImport = require('@plotly/webpack-dash-dynamic-import');

const packagejson = require('./package.json');

const dashLibraryName = packagejson.name.replace(/-/g, '_');

module.exports = {
    entry: { main: './src/lib/index.js' },
    output: {
        path: path.resolve(__dirname, dashLibraryName),
        chunkFilename: '[name].js',
        filename: 'bundle.js',
        library: dashLibraryName,
        libraryTarget: 'window',
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'plotly.js': 'Plotly',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!3dmol\/|speck\/|ideogram\/|react-alignment-viewer\/)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                async: {
                    chunks: 'async',
                    minSize: 0,
                    name(module, chunks, cacheGroupKey) {
                        return `${cacheGroupKey}-${chunks[0].name}`;
                    }
                },
                shared: {
                    chunks: 'async',
                    minSize: 0,
                    minChunks: 2,
                    name: 'dash_bio-shared'
                }
            }
        }
    },
    plugins: [
        new WebpackDashDynamicImport(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ],
    resolve: {
        alias: {
            'ideogram': 'ideogram/dist/js/ideogram.min.js'
        }
    }
};
