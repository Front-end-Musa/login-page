
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/login-page/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/login-page/login"
  },
  {
    "renderMode": 2,
    "route": "/login-page/welcome"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 723, hash: '8eb297b517916efea8f0018080acc7f900eab2ef223779d4597c704c4604aa03', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: 'fd282555b4bae9750344dab1f3b3d42fcbe45fe2fc2f463ec072dd1588aee384', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 1353, hash: '38d8a7a52bca4b0dbef1d344fd145dc803e139e94112344be61bf539d338bf23', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 47008, hash: '68108b49af7204d04ccfdd9522c184eae2996f81c590e9a2c84204bbbbc77c94', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-4KT5UUBR.css': {size: 94, hash: '6K5pTb8rAlA', text: () => import('./assets-chunks/styles-4KT5UUBR_css.mjs').then(m => m.default)}
  },
};
