import path from 'node:path'
import { fileURLToPath } from 'node:url'

const getEntryPoint = (name) => {
    console.log(
        `entry point for ${name}: ${path.resolve(fileURLToPath(import.meta.url), `../../packages/${name}/index.ts`)}`
    )
    return path.resolve(fileURLToPath(import.meta.url), `../../packages/${name}/index.ts`)
}

const entries = {
    core: getEntryPoint('core'),
}

export { entries }
