import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir: 'dist',
      insertTypesEntry: true, // ← これが大事
      include: ['src'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  build: {
    minify: process.env.NODE_ENV === 'production' ? 'esbuild' : false,
    terserOptions: process.env.NODE_ENV === 'production' ? {
      compress: {
        drop_console: true, // すべてのconsoleを削除
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // console.errorは除外
      },
    } : {},
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'kintone-vue3-component',
      fileName: (format) => `kintone-vue3-component.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
