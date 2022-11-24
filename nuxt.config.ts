export default defineNuxtConfig({
    modules: [
        ['@pinia/nuxt', {autoImports: ['defineStore']}]
    ],
    imports: {
        dirs: ['stores'],
    }
});
