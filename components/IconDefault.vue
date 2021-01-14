<template>
    <span :class="`${social ? 'fab' : 'fas'} fa-${symbol}`"></span>
</template>

<script>
    export default {
        props: {
            symbol: {
                type: String,
                default: 'clock'
            },
            social: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
