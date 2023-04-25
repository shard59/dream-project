import type { Configuration } from 'webpack';

type BuildMode = Configuration['mode']

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface EnvOptions {
    mode: BuildMode
    port: number
    apiUrl: string
    project: 'storybook' | 'frontend' | 'jest'
}

export interface BuildOptions extends EnvOptions {
    paths: BuildPaths
    isDev: boolean
}
