/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import vue from '@vitejs/plugin-vue'
import UnheadVite from '@unhead/addons/vite'
import eslint from 'vite-plugin-eslint'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  process.env = { ...process.env, ...env }

  const srcDir = resolve(__dirname, './src')

  return {
    root,
    resolve: {
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@': srcDir,
        'src': srcDir,
        'components': resolve(srcDir, './components'),
        'layouts': resolve(srcDir, './layouts'),
        'pages': resolve(srcDir, './pages'),
        'stores': resolve(srcDir, './stores'),
        'data': resolve(srcDir, './data'),
        'composables': resolve(srcDir, './composables'),
        'plugins': resolve(srcDir, './plugins'),
        'assets': resolve(srcDir, './assets')
      }
    },
    plugins: [
      vue(),
      UnheadVite(),
      eslint({
        lintOnStart: true
      }),
      VueI18nPlugin({
        include: resolve(dirname(fileURLToPath(import.meta.url), './src/locales/**')),
        fullInstall: false,
        compositionOnly: true,
      })
    ],
    test: {
      alias: {},
      browser: {
        enabled: true,
        name: 'chrome'
      }
    }
  }
})
