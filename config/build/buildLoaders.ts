import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import buildCssLoader from './loaders/buildCssLoader';
import buildBabelLoader from './loaders/buildBabelLoader';

export default function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const babelLoader = buildBabelLoader(isDev);

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoaders: RuleSetRule = buildCssLoader(isDev);

    const typeScriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        cssLoaders,
    ];
}
