<template>
    <component :is="setTag" :to="to" class="ve-text">
        <slot />
    </component>
</template>

<script>
    export default {
        props: {
            to: {
                type: String,
                default: undefined
            },
            tag: {
                type: String,
                default: undefined
            }
        },
        computed: {
            setTag () {
                if (this.to) {
                    return 'NuxtLink'
                } else if (this.tag) {
                    return this.tag
                } else {
                    return 'span'
                }
            }
        }
    }
</script>

<style lang="scss">
  .ve-text {
    line-height: var(--ve-text-line-height, 1.4);
    min-height: calc(1em * var(--ve-text-line-height, 1.4));
  }
</style>
