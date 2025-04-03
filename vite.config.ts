import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
    base: '',
    server: {
        host: '::',
        port: 8080,
    },
    plugins: [
        vue(),
        vueDevTools(),
    ]
})
