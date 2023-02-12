import type {Configuration} from "webpack"

export type BuildMode = Configuration['mode']

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface EnvOptions {
    mode: BuildMode
    port: number
}

export interface BuildOptions extends EnvOptions {
    paths: BuildPaths
    isDev: boolean
}