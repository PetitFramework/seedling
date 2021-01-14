<template>
    <div>
        <slot :loading="$fetchState.pending" :enabled="enabled" :keyword="keyword" />
    </div>
</template>

<script>
    import { debounce } from '@/utils'

    export default {
        props: {
            input: {
                type: String,
                default: ''
            },
            request: {
                type: Function,
                default: () => {}
            },
            debounce: {
                type: Number,
                default: 500
            },
            treshold: {
                type: Number,
                default: 1
            },
            store: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                enabled: false,
                keyword: ''
            }
        },
        async fetch () {
            if (this.enabled) {
                await this.request().then(() => {
                    this.keyword = this.input
                })
            }
        },
        watch: {
            input: debounce(500, function (value) {
                if (value.length >= this.treshold) {
                    this.enabled = true
                    this.$fetch()
                } else {
                    this.enabled = false
                    this.keyword = ''
                }
            })
        }
    }
</script>
