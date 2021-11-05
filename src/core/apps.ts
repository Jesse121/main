const apps = [
	{
		name: "vue3-demo",
		entry: "//localhost:3001/",
		activeRule: "/vue3-demo",
		container: "#subapp-viewport", // 子应用挂载的div
		props: {
			routerBase: "/vue3-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
		}
	}
];

export default apps;
