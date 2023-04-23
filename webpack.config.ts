import { Configuration } from 'webpack';
import path from 'path';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildPaths, EnvOptions } from './config/build/types/config';

export default (options: EnvOptions): Configuration => {
    const {
        mode = 'development',
        port,
        apiUrl = 'http://localhost:8000/',
    } = options;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        apiUrl,
        port: Number(port),
    });
};
