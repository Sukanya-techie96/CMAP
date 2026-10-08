import path from 'path';
import { fileURLToPath } from 'url';
import typescriptEslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { configBase as angularTypescriptConfig } from '@siemens/eslint-config-angular';
import { configBase as angularTemplateConfig } from '@siemens/eslint-config-angular/template';

// mimic CommonJS variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const tsConfig = typescriptEslint.config({
  extends: [...angularTypescriptConfig],
  plugins: { '@stylistic': stylistic },
  files: ['**/*.ts'],
  languageOptions: {
    parserOptions: {
      project: [
        'tsconfig.json',
        'tsconfig.app.json',
        'tsconfig.spec.json',
        'playwright/tsconfig.json'
      ],
      tsconfigRootDir: __dirname
    }
  },
  rules: {
    '@angular-eslint/component-class-suffix': ['off'],
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'cmap',
        style: 'camelCase'
      }
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'cmap',
        style: 'kebab-case'
      }
    ],
    '@stylistic/arrow-spacing': 2,
    '@stylistic/array-bracket-spacing': 2,
    '@stylistic/brace-style': 2,
    '@stylistic/comma-spacing': 2,
    '@stylistic/implicit-arrow-linebreak': 2,
    '@stylistic/keyword-spacing': 2,
    '@stylistic/member-delimiter-style': 2,
    '@stylistic/no-extra-semi': 2,
    '@stylistic/no-trailing-spaces': 2,
    '@stylistic/no-multiple-empty-lines': 2,
    '@stylistic/switch-colon-spacing': 2
  }
});

export const templateConfig = typescriptEslint.config({
  extends: [...angularTemplateConfig],
  files: ['**/*.html']
});

export default typescriptEslint.config(...tsConfig, ...templateConfig);
