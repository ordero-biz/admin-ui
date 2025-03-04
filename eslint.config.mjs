import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      '@stylistic': stylistic,
      'jsx-a11y': jsxA11y,
    },
  },
  {
    rules: {
      '@stylistic/indent': ['error', 2], // Use 2 spaces for indentation
      '@stylistic/semi': ['error', 'always'], // Enforce semicolons
      '@stylistic/quotes': ['error', 'single'], // Use single quotes
      '@stylistic/jsx-quotes': ['error', 'prefer-double'], // Use double quotes for JSX attributes
      ...jsxA11y.configs.strict.rules, // Add recommended rules for jsx-a11y
    },
  },
];

export default eslintConfig;
