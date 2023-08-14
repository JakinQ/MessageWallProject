import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import routes from 'virtual:generated-pages';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue'),
        // redirect: '/',
        children: []
    }
]
// routes.push({
//     path: '/',
//     // redirect: '/login',
// });
//导入生成的路由数据
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// router.beforeEach(async (_to, _from, next) => {
//     NProgress.start();
//     next();
// });

// router.afterEach((_to) => {
//     NProgress.done();
// });

export default router;
