import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import path from 'path';
import buildCssLoader from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const modifiedConfig = { ...config };
    const src = path.resolve(__dirname, '..', '..', 'src');

    modifiedConfig.resolve!.modules = [src, 'node_modules'];
    modifiedConfig.resolve!.extensions!.push('.ts', '.tsx');

    modifiedConfig.module!.rules = modifiedConfig.module!.rules!.map((rule: RuleSetRule | '...') => {
        if (rule !== '...' && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    modifiedConfig.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    modifiedConfig.module!.rules.push(buildCssLoader(true));

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return modifiedConfig;
};
