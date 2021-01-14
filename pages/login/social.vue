<template>
    <div class="ve-page-social">
        <Loader />
    </div>
</template>

<script>
    import queryString from 'query-string'
    import Loader from '@/components/Loader'

    export default {
        components: {
            Loader
        },
        layout: 'empty',
        mounted () {
            const { code, network } = queryString.parse(window.location.search)
            let token = ''

            switch (network) {
            case 'google':
                if (!code) return
                token = code
                break
            default:
                return
            }
            this.$store.dispatch('auth/social', { token, network })
                .then(({ data }) => {
                    if (data.registered) {
                        this.$router.push('/')
                    } else {
                        this.$router.push({
                            path: '/register',
                            query: {
                                name: data.name,
                                email: data.email,
                                socialId: data.socialId,
                                network: data.network,
                                accessToken: data.accessToken,
                                refreshToken: data.refreshToken
                            }
                        })
                    }
                })
        }
    }
</script>

<style lang="scss">
  .ve-page-social {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
