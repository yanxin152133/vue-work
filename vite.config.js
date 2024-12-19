import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    server: {
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
    base: process.env.NODE_ENV === "development" ? "/" : "/work/", // 默认 '/'
    build: {
        outDir: 'work', // 默认是 'dist'
    }
})
