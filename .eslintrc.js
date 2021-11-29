const WARN = 1;
const ERROR = 2;
module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': ['google'],
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'rules': {
    'object-curly-spacing': [WARN, 'always'],
    'indent': [WARN, 2],
    'max-len': [WARN, 100],
    'no-eval': ERROR,
  },
};
