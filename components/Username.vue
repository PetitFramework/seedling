<template>
    <TextDefault :to="to" :tag="tag" class="ve-username">
        <slot />
    </TextDefault>
</template>

<script>
    import TextDefault from '@/components/Text'

    export default {
        components: {
            TextDefault
        },
        props: {
            to: {
                type: String,
                default: undefined
            },
            tag: {
                type: String,
                default: 'div'
            }
        }
    }
</script>

<style lang="scss">
  .ve-username {
    font-weight: 700;
    color: var(--color-primary);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
