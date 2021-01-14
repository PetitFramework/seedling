import StylelintPlugin from 'stylelint-webpack-plugin'

// const isDev = process.env.NODE_ENV !== 'production'

export default {
    publicRuntimeConfig: {
        GOOGLE_AUTH_ID: process.env.GOOGLE_AUTH_ID,
        GOOGLE_AUTH_ENDPOINT: process.env.GOOGLE_AUTH_ENDPOINT,
        GOOGLE_AUTH_TOKEN_ENDPOINT: process.env.GOOGLE_AUTH_TOKEN_ENDPOINT,
        GOOGLE_AUTH_CERTS_ENDPOINT: process.env.GOOGLE_AUTH_CERTS_ENDPOINT,
        GOOGLE_AUTH_USER_INFO_ENDPOINT: process.env.GOOGLE_AUTH_USER_INFO_ENDPOINT,
        GOOGLE_AUTH_REDIRECT_URI: process.env.GOOGLE_AUTH_REDIRECT_URI
    },
    privateRuntimeConfig: {
        GOOGLE_AUTH_SECRET: process.env.GOOGLE_AUTH_SECRET
        // API_SECRET: process.env.API_SECRET
    },
    server: {
        port: 3010, // default: 3000
        host: '0.0.0.0' // default: localhost
    },
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700;800;900&display=swap' }
        ],
        script: [
            {
                src: 'https://pro.fontawesome.com/releases/v5.15.1/js/all.js'
            }
        ]
    },
    pageTransition: 'page',
    layoutTransition: 'layout',
    loading: {
        color: 'var(--color-primary)',
        height: '3px'
    },
    css: [
        './assets/scss/styles.scss'
    ],
    router: {
        middleware: ['refreshToken', 'user'],
        trailingSlash: false
    },
    plugins: [
        {
            src: '~/plugins/core.plugin.js',
            mode: 'all'
        },
        {
            src: '~/plugins/axios.plugin.js',
            mode: 'all'
        },
        {
            src: '~/plugins/tooltip.plugin.js',
            mode: 'client'
        },
        {
            src: '~/plugins/repositories.plugin.js',
            mode: 'all'
        },
        {
            src: '~/plugins/vuelidate.plugin.js',
            mode: 'all'
        },
        {
            src: '~/plugins/msgs.plugin.js',
            mode: 'all'
        },
        {
            src: '~/plugins/literals.plugin.js',
            mode: 'all'
        },
        {
            src: '~/plugins/popper.plugin.js',
            mode: 'client'
        }, {
            src: '~/plugins/tippy.plugin.js',
            mode: 'client'
        }, {
            src: '~/plugins/resizeObserver.plugin.js',
            mode: 'client'
        }, {
            src: '~/plugins/clickOutside.plugin.js',
            mode: 'client'
        }, {
            src: '~/plugins/scroll-lock.plugin.js',
            mode: 'client'
        }, {
            src: '~/plugins/portalVue.plugin.js',
            mode: 'all'
        }
    ],
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/color-mode'
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        '@nuxtjs/universal-storage',
        '@nuxtjs/redirect-module'
    ],
    redirect: [
        {
            // eslint-disable-next-line
            from: '(?!^\/$|^\/[?].*$)(.*\/[?](.*)$|.*\/$)',
            to: (from, req) => {
                const base = req._parsedUrl.pathname.replace(/\/$/, '')
                const search = req._parsedUrl.search
                return base + (search != null ? search : '')
            },
            statusCode: 301
        }
    ],
    storage: {
        initialState: {
            communitySearcherShowCategories: true
        }
    },
    styleResources: {
        scss: [
            './assets/scss/settings/_settings.scss',
            './assets/scss/tools/_tools.scss',
            './assets/scss/foundations/_foundations.scss'
        ]
    },
    colorMode: {
        preference: 'dark', // default value of $colorMode.preference
        fallback: 'dark' // fallback value if not system preference found
    },
    axios: {
        proxy: true,
        prefix: '/api',
        credentials: true
    },
    proxy: {
        '/api/': { target: 'http://localhost:3027' }
    },
    build: {
        plugins: [
            new StylelintPlugin({
                files: ['**/*.s?(a|c)ss', '**/*.vue']
            })
        ],
        extend (config, ctx) {
            config.resolve.alias.vue = 'vue/dist/vue.common'
        }
    }
}
