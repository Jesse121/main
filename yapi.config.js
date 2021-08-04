/**
 * @type {import('@gtlmjs/yapi-to-request-code/src/index').Options}
 *
 * http://git.rongsitech.com:8002/zhangbl/yapi-to-request-code#%E9%85%8D%E7%BD%AE%E9%A1%B9
 */
module.exports = {
	yapiUrl: "http://192.168.137.35:3000",
	outputDir: "./src/api",
	apiPrefix: /\/api\/((web\/)|(api\/))?/,
	apiMockExpression: `import.meta.env.VITE_APP_MOCK === 'true'`,
	apiNameTransform: (name, item) => {
		return item.path === "/api/login" ? "appLogin" : name;
	},
	projects: [
		{
			id: 195,
			token: "53d126ea1e05a4cf14731d4f0e6c564239ac4dd7382d26c2c6dc66014a51ef6c"
		}
	]
};
