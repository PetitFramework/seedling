<template>
    <div
        v-click-outside="{ handler: close }"
        v-scroll-lock.mobile="{ id: 'HeaderSearch', lock: isActive }"
    >
        <OgActionButton icon="search" :active="isActive" @click.native="toggle" />
        <OgHeaderDropdown :is-active="isActive">
            search
        </OgHeaderDropdown>
    </div>
</template>

<script>
    import OgHeaderDropdown from '@/components/HeaderDropdown'
    import OgActionButton from '@/components/ActionButton'

    export default {
        components: {
            OgHeaderDropdown,
            OgActionButton
        },
        data () {
            return {
                isActive: false
            }
        },
        methods: {
            toggle () {
                this.isActive = !this.isActive
            },
            close () {
                if (this.isActive) {
                    this.isActive = false
                }
            }
        }
    }
</script>

<style lang="scss">
  //
</style>
