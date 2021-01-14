<template>
    <button class="ve-hamburger">
        <VeIcon v-if="!active" class="ve-hamburger__icon" symbol="bars" />
        <VeIcon v-else class="ve-hamburger__icon is-active" symbol="cross" />
    </button>
</template>

<script>
    import VeIcon from '@/components/IconDefault'

    export default {
        components: {
            VeIcon
        },
        props: {
            active: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
  .ve-hamburger {
    $this: &;

    display: flex;
    align-items: center;
    justify-content: center;
    min-height: var(--header-height);
    min-width: var(--header-height);
    padding: em(16px);
    transition: color 0.3s;

    @include breakpoint(600px) {
      background-color: var(--button-primary-bg-color);
      color: var(--button-primary-color);
      margin-right: em(24px);
    }

    @include breakpoint($bp) {
      display: none;
    }

    &:active,
    &:focus,
    &:hover {
      color: var(--button-primary-color-hover);

      @include breakpoint(600px down) {
        color: var(--color-text-two);
      }
    }

    &__icon {
      font-size: em(24px);

      &.is-active {
        @include breakpoint(600px down) {
          color: var(--color-primary);
        }
      }
    }
  }
</style>
