import vitestPlugin from '@vitest/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import typescriptPlugin from 'typescript-eslint'

export default typescriptPlugin.config(
    {
        ignores: ['coverage/**/*', 'dist/**/*', 'node_modules/**/*'],
    },
    {
        files: ['**/*.?(m|c)@(t|j)s'],
    },
    typescriptPlugin.configs.base,
    importPlugin.configs.typescript,
    vitestPlugin.configs.recommended,
    {
        plugins: {
            import: importPlugin,
        },

        rules: {
            '@typescript-eslint/consistent-type-assertions': 'warn',
            '@typescript-eslint/no-array-constructor': 'warn',
            '@typescript-eslint/no-redeclare': 'warn',
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowShortCircuit: true,
                    allowTaggedTemplates: true,
                    allowTernary: true,
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'none',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/no-use-before-define': [
                'warn',
                {
                    classes: false,
                    functions: false,
                    typedefs: false,
                    variables: false,
                },
            ],
            '@typescript-eslint/no-useless-constructor': 'warn',
            'array-callback-return': 'warn',
            'dot-location': ['warn', 'property'],
            eqeqeq: ['warn', 'smart'],
            'getter-return': 'warn',
            'import/first': 'error',
            'import/no-default-export': 'warn',
            'import/no-named-as-default': 'warn',
            'import/no-named-as-default-member': 'warn',
            'import/no-duplicates': 'warn',
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                },
            ],
            'new-parens': 'warn',
            'no-caller': 'warn',
            'no-cond-assign': ['warn', 'except-parens'],
            'no-console': 'warn',
            'no-const-assign': 'warn',
            'no-control-regex': 'warn',
            'no-delete-var': 'warn',
            'no-dupe-args': 'warn',
            'no-dupe-keys': 'warn',
            'no-duplicate-case': 'warn',
            'no-empty-character-class': 'warn',
            'no-empty-pattern': 'warn',
            'no-eval': 'warn',
            'no-ex-assign': 'warn',
            'no-extend-native': 'warn',
            'no-extra-bind': 'warn',
            'no-extra-label': 'warn',
            'no-fallthrough': 'warn',
            'no-func-assign': 'warn',
            'no-implied-eval': 'warn',
            'no-invalid-regexp': 'warn',
            'no-iterator': 'warn',
            'no-label-var': 'warn',
            'no-labels': [
                'warn',
                {
                    allowLoop: true,
                    allowSwitch: false,
                },
            ],
            'no-lone-blocks': 'warn',
            'no-loop-func': 'warn',
            'no-mixed-operators': [
                'warn',
                {
                    allowSamePrecedence: false,

                    groups: [
                        ['&', '|', '^', '~', '<<', '>>', '>>>'],
                        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                        ['&&', '||'],
                        ['in', 'instanceof'],
                    ],
                },
            ],
            'no-multi-str': 'warn',
            'no-native-reassign': 'warn',
            'no-negated-in-lhs': 'warn',
            'no-new-func': 'warn',
            'no-new-object': 'warn',
            'no-new-symbol': 'warn',
            'no-new-wrappers': 'warn',
            'no-obj-calls': 'warn',
            'no-octal': 'warn',
            'no-octal-escape': 'warn',
            'no-regex-spaces': 'warn',
            'no-restricted-properties': [
                'error',
                {
                    message:
                        'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
                    object: 'require',
                    property: 'ensure',
                },
                {
                    message:
                        'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
                    object: 'System',
                    property: 'import',
                },
            ],
            'no-restricted-syntax': ['warn', 'WithStatement'],
            'no-script-url': 'warn',
            'no-self-assign': 'warn',
            'no-self-compare': 'warn',
            'no-sequences': 'warn',
            'no-shadow-restricted-names': 'warn',
            'no-sparse-arrays': 'warn',
            'no-template-curly-in-string': 'warn',
            'no-this-before-super': 'warn',
            'no-throw-literal': 'warn',
            'no-unreachable': 'warn',
            'no-unused-labels': 'warn',
            'no-useless-computed-key': 'warn',
            'no-useless-concat': 'warn',
            'no-useless-escape': 'warn',
            'no-useless-rename': [
                'warn',
                {
                    ignoreDestructuring: false,
                    ignoreExport: false,
                    ignoreImport: false,
                },
            ],
            'no-whitespace-before-property': 'warn',
            'no-with': 'warn',
            'require-yield': 'warn',
            'rest-spread-spacing': ['warn', 'never'],
            strict: ['warn', 'never'],
            'unicode-bom': ['warn', 'never'],
            'use-isnan': 'warn',
            'valid-typeof': 'warn',
        },
    },
    {
        files: ['*.config.?(m|c)@(t|j)s', 'scripts/**/*.config.?(m|c)@(t|j)s'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
    {
        files: ['scripts/**/*.?(m|c)@(t|j)s'],
        rules: {
            'no-console': 'off',
        },
    },
)