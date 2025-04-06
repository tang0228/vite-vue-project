import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      // less 相关配置
      less: {
        // globalVars: {
        //   blue: '#3eaf7c',
        //   primary: '#3eaf7c',
        // }
      }
    }
  }
})
