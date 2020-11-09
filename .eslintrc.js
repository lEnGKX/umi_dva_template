module.exports = {
  env: {
    // 指定代码的运行环境
    browser: true,
    node: false,
  },
  settings: {
    // 自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    //使用推荐的React代码检测规范
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  // ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/display-name': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],

    'no-console': 'error',
    'no-debugger': 'error',
    'react/prop-types': 'off',
    'react/no-string-refs': 'off',
    'no-var': 'error',
    'no-alert': 'off',
    'no-const-assign': 'error',
    'no-eval': 'error',
    'no-unused-vars': 2,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    camelcase: [2, { properties: 'always', allow: ['^UNSAFE_'] }],
    'max-len': [2, 250, 4],
    'max-lines': [
      'error',
      {
        max: 1400,
        skipBlankLines: false,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 600,
        skipBlankLines: false,
        skipComments: true,
      },
    ],
  },
};
