
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/welcome"
  },
  {
    "renderMode": 2,
    "route": "/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 712, hash: '5fd51120094c7daf9cdd8bb1a763ba16d388208b2489a339e40a6e57ba6ff5f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '16054d3cb678de6861ac29bb76361d79ea89f166662180b3c5b7fc2b05e9d4c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 42875, hash: 'c0bac04eda49b17762654785887a4e2a1c2a74d5cce6056c86f2a60135d0daa7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 42875, hash: 'c0bac04eda49b17762654785887a4e2a1c2a74d5cce6056c86f2a60135d0daa7', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 42875, hash: 'c0bac04eda49b17762654785887a4e2a1c2a74d5cce6056c86f2a60135d0daa7', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-4KT5UUBR.css': {size: 94, hash: '6K5pTb8rAlA', text: () => import('./assets-chunks/styles-4KT5UUBR_css.mjs').then(m => m.default)}
  },
};
