<template>
    <div class="ve-container" :class="[ variant && `ve-container--${variant}` ]">
        <div class="ve-container__wrapper">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            variant: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .ve-container {
    padding-left: var(--container-padding-left, var(--gap-wrapper));
    padding-right: var(--container-padding-right, var(--gap-wrapper));

    &__wrapper {
      display: var(--container-wrapper, block);
      margin-left: auto;
      margin-right: auto;
      max-width: var(--container-wrapper-max-width, var(--wrapper));
      width: 100%;
    }

    &--big {
      --container-wrapper-max-width: var(--wrapper-two);
    }
  }
</style>
