import { defineConfig,loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
	plugins:[
    vue()
  ],
	base: env.VITE_RES_URL,
  server:{
    host:'0.0.0.0',
    prot:3000 ,
    //反向代理
    proxy: {
      '/api':{
        target: env.VITE_RES_URL,
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
  }
})
