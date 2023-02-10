import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'

const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig({
  base: './',
  plugins: [vue(), vueJsx(), eslint()],
  // css配置
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";',
      }
    }
  },
  // 服务配置
  server: {
    port: 4000, // 设置服务启动端口号
    // open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    // 代理配置
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: path => path.replace(/^api/, '')
    //   }
    // }
  },
  // 别名配置
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      views: pathResolve('./src/views'),
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets'),
    },
  },
  // 打包配置
  build: {
    outDir: 'dist',     // 指定打包路径
    minify: 'esbuild', // 压缩规则
    chunkSizeWarningLimit: 2000 // chunk大小警告的限制(以kbs为单位)
  },
})