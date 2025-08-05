
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/login-page/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/login-page"
  },
  {
    "renderMode": 2,
    "route": "/login-page/welcome"
  },
  {
    "renderMode": 2,
    "route": "/login-page/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 723, hash: 'b49e76f14e1b70250a8e2f807787338887b04f4778e783c9fb9d0cc1a9bb17b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '444ae48c7347a1fac35157fd933e32d59011f8a34c11a7981c7f5b9edc5c9a09', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 42886, hash: '553ce086f4665e4f15e4d5e0935ce9d190d252c307d3a87d9265be579f84424b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 42886, hash: '553ce086f4665e4f15e4d5e0935ce9d190d252c307d3a87d9265be579f84424b', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'index.html': {size: 42886, hash: '553ce086f4665e4f15e4d5e0935ce9d190d252c307d3a87d9265be579f84424b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4KT5UUBR.css': {size: 94, hash: '6K5pTb8rAlA', text: () => import('./assets-chunks/styles-4KT5UUBR_css.mjs').then(m => m.default)}
  },
};
