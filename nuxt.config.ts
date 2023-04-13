// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.css',
        'assets/main.less',
        'element-plus/dist/index.css',
        'element-plus/theme-chalk/dark/css-vars.css'
    ],
    ssr: process.env.NODE_ENV !== "development",
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        'nuxt-og-image',
        '@element-plus/nuxt',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // 自动引入 `usePinia()`
                    'defineStore',
                    // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],
    imports: {
        dirs: ['./stores'],
    },
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://tools.aoe.top',
            siteName: '小莫的工具箱',
            siteDescription: '小莫的工具箱是一个实用的在线工具平台，提供各种免费的工具，帮助用户更高效地完成各种工作。快来体验吧！',
            language: 'zh', // prefer more explicit language codes like `en-AU` over `en`
        },
    },

})
