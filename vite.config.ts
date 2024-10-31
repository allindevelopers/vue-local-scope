import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	build: {
		lib: {
			entry: resolve(__dirname, "lib/index.ts"),
			name: "VueLocalScope",
			fileName: "vue-local-scope",
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});
