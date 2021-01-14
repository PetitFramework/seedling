<template>
    <PageError
        v-if="error.statusCode === 401"
        image="/img/bgs/401.png"
        title="¡No tienes permiso!"
        text="Inténtalo de nuevo más tarde. Si el problema continua ponte en contacto con nosotros."
        button="¡Corred insensatos!"
    />
    <PageError
        v-else-if="error.statusCode === 404"
        image="/img/bgs/404.png"
        title="Página no encontrada :("
        text="Puede que estemos haciendo algunas mejoras."
        button="Volver a la home"
    />
    <PageError
        v-else
        image="/img/bgs/error.png"
        title="Ups! Algo fue mal :("
        text="Inténtalo de nuevo más tarde. Si el problema continua ponte en contacto con nosotros."
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
        props: {
            error: {
                type: [Number, String, Object],
                default: 404
            }
        }
    }
</script>
