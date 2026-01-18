import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000", // আমাদের JSON Server এর ঠিকানা
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""), // '/api' সরিয়ে ফেলা হবে
			},
		},
	},
});
