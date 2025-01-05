import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'

const config = [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'no-debugger': 'error',
            'no-unused-vars': 'warn',
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
    },
]

export default config
