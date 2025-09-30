import js from '@eslint/js'
import jsonPlugin from '@eslint/json'
import stylisticPlugin from '@stylistic/eslint-plugin'
import { importX } from 'eslint-plugin-import-x'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import * as reactHooksPlugin from 'eslint-plugin-react-hooks'
import { configs } from 'typescript-eslint'

export default [
  jsxA11yPlugin.flatConfigs.recommended,
  importX.flatConfigs.recommended,
  ...configs.recommended,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'package-lock.json',
    ],
  },
  {
    files: [
      '**/*.{js,jsx,ts,tsx,mjs}',
    ],

    plugins: {
      '@stylistic': stylisticPlugin,
      'json': jsonPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },

    settings: {
      'import-x/extensions': ['.js', '.jsx'],
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          noWarnOnMultipleProjects: true,
        },
      },
      'react': {
        pragma: 'React',
        version: 'detect',
      },
    },

    rules: {
      ...js.configs.recommended.rules,
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'sort-imports': ['error', {
        ignoreDeclarationSort: true,
      }],

      'import-x/no-unresolved': 'error',
      'import-x/order': ['error', {
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'pathGroups': [{
          pattern: '{react,react-dom}',
          group: 'external',
          position: 'before',
        }],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      }],

      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-curly-spacing': 'error',
      'react/jsx-equals-spacing': 'error',
      'react/jsx-indent': ['error', 2],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-max-props-per-line': ['error', {
        maximum: 1,
      }],
      'react/jsx-newline': ['error', {
        prevent: true,
      }],
      'react/jsx-pascal-case': ['warn', {
        allowNamespace: true,
      }],
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }],
      'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      }],

      ...reactHooksPlugin.configs.recommended.rules,

      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-parens': 'error',
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 0,
      }],
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/key-spacing': ['error', {
        beforeColon: false,
        afterColon: true,
      }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/max-len': 'off',
      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-curly-newline': ['error', {
        consistent: true,
        multiline: true,
      }],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],
      '@stylistic/quote-props': ['error', 'consistent'],
      '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
      }],
      '@stylistic/rest-spread-spacing': ['error'],
      '@stylistic/semi': ['error', 'never', {
        'beforeStatementContinuationChars': 'always',
      }],
      '@stylistic/space-infix-ops': 'error',
    },
  },
  {
    files: ['**/*.json'],
    language: 'json/json',
    ...jsonPlugin.configs.recommended,
  },
]
