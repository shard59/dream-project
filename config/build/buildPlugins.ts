import webpack, {WebpackPluginInstance} from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
        template: paths.html
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
    }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}