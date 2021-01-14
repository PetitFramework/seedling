<template>
    <div class="ve-layout">
        <HeaderDefault />
        <div class="ve-layout__content">
            <nuxt />
        </div>
        <FooterDefault />
        <client-only>
            <teleport-target name="body" multiple />
        </client-only>
    </div>
</template>

<script>
    import HeaderDefault from '@/components/Header'
    import FooterDefault from '@/components/Footer'

    export default {
        name: 'Default',
        components: {
            HeaderDefault,
            FooterDefault
        }
    }
</script>

<style lang="scss">
  .ve-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__content {
      flex-grow: 1;
      z-index: var(--z-index-knight);
    }
  }
</style>
