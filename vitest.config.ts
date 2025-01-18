import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import { entries } from './scripts/aliases.js'

export default defineConfig({
    test: {
        environment: 'happy-dom',
        coverage: {
            enabled: true,
            exclude: [
                'scripts/*',
                '**/dist/*',
                'examples/*',
                'commitlint.config.js',
                ...coverageConfigDefaults.exclude,
            ],
            provider: 'v8',
            reporter: ['text', 'html'],
        },
    },
    resolve: {
        alias: entries,
    },
})
