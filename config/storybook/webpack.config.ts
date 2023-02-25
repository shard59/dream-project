import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import buildCssLoader from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const modifiedConfig = { ...config };
    const src = path.resolve(__dirname, '..', '..', 'src');

    modifiedConfig.resolve.modules.push(src);
    modifiedConfig.resolve.extensions.push('.ts', '.tsx');

    modifiedConfig.module.rules = modifiedConfig.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    modifiedConfig.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    modifiedConfig.module.rules.push(buildCssLoader(true));

    return modifiedConfig;
};
