import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
    const cssLoaders: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader ,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                       auto: /\.module\./i,
                       localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
                    }
                }
            },
            'sass-loader'
        ]
    }

    const typeScriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
    }

    return [
        typeScriptLoader,
        cssLoaders,
    ]
}