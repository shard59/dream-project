import { RuleSetRule } from 'webpack';

const buildBabelLoader = (isDev: boolean): RuleSetRule => ({
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});

export default buildBabelLoader;