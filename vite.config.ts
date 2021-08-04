import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { defineConfig } from "vite";

import { svgBuilder } from "./src/utils/svgBuilder";

const resolve = (dir: string) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), [svgBuilder("./src/assets/icons/")]],
	resolve: {
		alias: {
			"@": resolve("src")
		}
	},
	server: {
		proxy: {
			"/api": {
				target: "http://192.168.137.23:28081/renren-api/", // 开发
				// target: "http://192.168.137.23:38081/renren-api/", // 测试
				// target: "https://manage.71dj.com/", // 生产
				changeOrigin: true
			}
		}
	},
	build: {
		target: "es2015",
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (/\/src\/(components|layout)/.test(id)) return "components";
					if (id.includes("element-plus")) return "element-plus";
					if (id.includes("node_modules")) return "vendor";
				}
			}
		}
	}
});
