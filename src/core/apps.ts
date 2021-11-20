const apps = [
	{
		name: "vue3-demo",
		entry: "//localhost:3001/",
		activeRule: "/vue3-demo",
		container: "#subapp-viewport", // 子应用挂载的div
		props: {
			routerBase: "/vue3-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
		}
	},
	{
		name: "vue2-demo",
		entry: "//localhost:3002/",
		activeRule: "/vue2-demo",
		container: "#subapp-viewport", // 子应用挂载的div
		props: {
			routerBase: "/vue2-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
		}
	},
	{
		name: "react-demo",
		entry: "//localhost:3003/",
		activeRule: "/react-demo",
		container: "#subapp-viewport", // 子应用挂载的div
		props: {
			routerBase: "/react-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
		}
	}
];

export default apps;
