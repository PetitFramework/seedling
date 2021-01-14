<template>
    <span>{{ format(value, 1) }}</span>
</template>

<script>
    import { nFormatter } from '@/utils'

    export default {
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        methods: {
            format (num, digits) {
                return nFormatter(num, digits)
            }
        }
    }
</script>
