import {WebpackPluginInstance} from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
    return [new HTMLWebpackPlugin({
        template: paths.html
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
    })]
}