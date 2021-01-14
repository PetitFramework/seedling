<template>
    <div class="ve-loader">
        <div class="ve-loader__container">
            <div class="ve-loader__logo">
                <OgLogoIcon />
            </div>
        </div>
    </div>
</template>

<script>
    import OgLogoIcon from '@/components/LogoIcon'

    export default {
        components: {
            OgLogoIcon
        }
    }
</script>

<style lang="scss">
  .ve-loader {
    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    &__logo {
      z-index: 2;
      position: relative;
      border-radius: 50%;

      &::after {
        content: "";
        display: block;
        width: em(168px);
        height: em(168px);
        border-radius: 50%;
        border: em(3px) solid transparent;
        border-top-color: var(--color-primary);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: spin 2s linear infinite;
        transform-origin: 0 0;
      }

      svg {
        width: em(128px);
      }
    }
  }
</style>
