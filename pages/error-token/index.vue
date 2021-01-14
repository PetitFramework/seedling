<template>
    <PageError
        title="Error con tu inicio de sesión"
        :text="`Has sido deslogueado y vas a ser redirigido a la home en ${timerCount} segundos...`"
        button="Volver a la Home"
    />
</template>

<script>
    import PageError from '@/components/Pages/PageError'

    export default {
        components: {
            PageError
        },
        layout: 'empty',
        async asyncData ({ $repositories, error }) {
            const { data } = await $repositories.auth.logout()
            if (data) return data
            error({ statusCode: 500 })
        },
        data () {
            return {
                timerCount: 10
            }
        },
        watch: {
            timerCount: {
                handler (value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--
                        }, 1000)
                    } else {
                        this.$router.push('/')
                    }
                },
                immediate: true
            }
        },
        async mounted () {
            await this.$repositories.auth.logout()
        }
    }
</script>

<style lang="scss">
  .ve-error-token {
    padding-top: var(--space-sections);
    padding-bottom: var(--space-sections);

    &__title {
      text-align: center;
      color: var(--color-text-two);
      font-size: em(20px);
    }

    &__msg {
      text-align: center;
      margin-top: em(16px);
    }
  }
</style>
