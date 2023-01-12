import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({

  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    },
    extensions:[".mjs",".js",".ts",".jsx",".tsx",".json"]
  },
  css: {
		preprocessorOptions: {
			scss: {
				// 自定义的主题色
				additionalData: `@use "@/styles/element/index.scss" as *;`,
			},
		},
	},
  plugins: [
    vue(),
    eslintPlugin({
      include:['src/**/*.js','src/**/*.vue','src/*.js','src/*.vue']
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      // 执行icon name的格式
      symbolId: 'icon-[name]',
    }),
    AutoImport({
      resolvers:[ElementPlusResolver({
        importStyle: 'sass'
      })]
    }),
    Components({
      resolvers:[ElementPlusResolver({
        importStyle: 'sass'
      })]
    }),
    ElementPlus({
      useSource: true,
    }),
  ],
})
