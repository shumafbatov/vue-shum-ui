import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library'
  const isDemo = mode === 'demo'

  if (isLibrary) {
    // Конфигурация для сборки библиотеки
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'VueShumUi',
          fileName: (format) => `vue-shum-ui.${format}.js`,
        },
        rollupOptions: {
          external: ['vue', 'ant-design-vue'],
          output: {
            exports: 'named',
            globals: {
              vue: 'Vue',
              'ant-design-vue': 'AntDesignVue',
            },
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === 'style.css') {
                return 'style.css'
              }
              return assetInfo.name || 'asset'
            },
          },
        },
        outDir: 'dist',
        cssCodeSplit: false,
      },
    }
  }

  if (isDemo) {
    // Конфигурация для сборки демо приложения
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
      base: '/vue-shum-ui/',
      build: {
        outDir: 'dist-demo',
        emptyOutDir: true,
      },
    }
  }

  // Конфигурация для dev режима
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  }
})

