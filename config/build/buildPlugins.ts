import webpack, { WebpackPluginInstance } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export default function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const {
        paths, isDev, apiUrl, project,
    } = options;

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}
