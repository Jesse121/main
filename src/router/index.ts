import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Layout from "@/layout/index.vue";

export const constantRoutes: RouteRecordRaw[] = [
	{
		path: "/redirect", //用于tagsView中刷新
		component: Layout,
		meta: {
			hidden: true
		},
		children: [
			{
				path: "/redirect/:path(.*)",
				component: () => import("@/views/redirect/index.vue")
			}
		]
	},
	{
		path: "/login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			title: "登录",
			hidden: true
		}
	},
	{
		path: "/404",
		component: () => import("@/views/errorPage/404.vue"),
		meta: {
			title: "404",
			hidden: true
		}
	},
	{
		path: "/",
		component: Layout,
		redirect: "/home/index",
		meta: { title: "首页" },
		children: [
			{
				path: "index",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: { title: "首页", icon: "home", breadcrumb: false }
			}
		]
	},
	{
		path: "/subapp-test", //测试子应用路由
		component: Layout,
		redirect: "noRedirect",
		name: "subapp-test",
		meta: { title: "qiankun子应用", icon: "copyright", isMicrApp: true },
		children: [
			{
				path: "/subapp-test/index",
				name: "subapp-test",
				meta: { title: "首页", isMicrApp: true },
				redirect: "/subapp-test/index/index"
			},
			{
				path: "/subapp-test/about",
				name: "subapp-test",
				meta: { title: "关于我们", isMicrApp: true },
				redirect: "/subapp-test/about/index"
			}
		]
	},

	{
		path: "/:pathMatch(.*)*",
		redirect: "/404",
		meta: { hidden: true }
	}
];

export const asyncRoutes: Array<RouteRecordRaw> = [];

const router = createRouter({
	history: createWebHistory(),
	routes: [...constantRoutes, ...asyncRoutes]
});

export default router;
