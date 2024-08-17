import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],  // Warn about unused variables, but ignore those starting with '_'
      'no-console': 'warn',  // Warn when 'console' is used
      'eqeqeq': ['error', 'always'],  // Enforce the use of '===' and '!==' instead of '==' and '!='
      'curly': ['error', 'multi-line', 'consistent'],  // Enforce curly braces for all control statements
      'semi': ['error', 'always'],  // Enforce semicolons at the end of statements
      'quotes': ['error', 'single', { 'avoidEscape': true }],  // Enforce single quotes except to avoid escaping
      'react/prop-types': 'off',  // Disable prop-types rule (if using TypeScript or other type systems)
      'react/jsx-uses-react': 'off',  // Disable the rule since React 17+ with JSX transform no longer requires 'React' in scope
      'react/react-in-jsx-scope': 'off',  // Same reason as above
      'react/jsx-uses-vars': 'error',  // Ensure that variables used in JSX are marked as used
    },
    overrides: [
      {
        files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
        rules: {
          'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
          'import/first': 'error',  // Ensure all imports appear before other statements
          'import/no-duplicates': 'warn',  // Disallow duplicate imports
        },
      },
    ],
  },
];