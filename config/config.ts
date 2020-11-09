import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // base: '/docs/',
  // publicPath: '/static/',
  // hash: true,
  // history: {
  //   type: 'hash',
  // }, // 默认是 browser
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  proxy: {
    '/api/': {
      target: 'http://81.69.13.123:7001/api',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  dva: {
    hmr: true,
  },
});
