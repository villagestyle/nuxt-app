// path.resolve把一个路径或路径片段的序列解析为一个绝对路径
// process.cwd() 方法返回 Node.js 进程的当前工作目录。
// const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`)

export const createRouter = (resolve) => [
  {
    path: '/',
    redirect: '/home',
    name: "Index"
  },
  {
    path: '/reg',
    name: 'index',
    component: resolve(__dirname, '../pages/index.vue'),
    meta: {
      title: 'index',
      ssr: true
    },
  },
  {
    path: '/home',
    name: 'home',
    component: resolve(__dirname, '../pages/login.vue'),
    meta: {
      title: 'home',
      ssr: false,
    },
  },
  {
    path: '/info/:id',
    name: 'info',
    component: resolve(__dirname, '../pages/info.vue'),
    meta: {
      title: '这是信息页面',
      ssr: true,
    },
  },
  {
    path: '/info',
    name: 'infoSet',
    component: resolve(__dirname, '../pages/setInfo.vue'),
    meta: {
      title: '这是信息设置页面',
      ssr: true,
    },
  },
  {
    path: '/user',
    name: 'user',
    component: resolve(__dirname, '../pages/user/index.vue'),
    meta: {
      title: '这是用户页面',
      ssr: true,
    },
    children: [
      {
        path: 'center',
        name: 'center',
        component: resolve(__dirname, '../pages/user/userCenter.vue'),
        meta: {
          title: '这是用户中心页面',
          ssr: true,
        },
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: resolve(__dirname, '../pages/_.vue'),
    meta: {
      title: '404',
      ssr: true,
    },
  },
]

// 清除原有的Nuxt自动生的路由，添加自己的新路由
const extendRoutes = (routes, resolve) => {
  routes.length = 0
  routes.push(...createRouter(resolve))
}

export default { base: '/', extendRoutes, middleware: ['auth', 'user'] }
