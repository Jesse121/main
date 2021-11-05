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
		path: "/vue3-demo", //测试子应用路由
		component: Layout,
		redirect: "noRedirect",
		name: "vue3-demo",
		meta: { title: "vue3子应用", icon: "home", isMicrApp: true },
		children: [
			{
				path: "/vue3-demo/",
				name: "vue3-demo",
				meta: { title: "页面1", isMicrApp: true }
			},
			{
				path: "/vue3-demo/about",
				name: "vue3-demo",
				meta: { title: "关于", isMicrApp: true }
			}
		]
	}

	// {
	// 	path: "/:pathMatch(.*)*",
	// 	redirect: "/404",
	// 	meta: { hidden: true }
	// }
];

export const asyncRoutes: Array<RouteRecordRaw> = [];

const router = createRouter({
	history: createWebHistory(),
	routes: [...constantRoutes, ...asyncRoutes]
});

export default router;
