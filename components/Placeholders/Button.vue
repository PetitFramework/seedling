<template>
    <div
        class="ve-placeholder-button"
        :class="size && `ve-placeholder-button--${size}`"
        :style="{
            '--placeholder-button-width': width,
            '--placeholder-button-radius': radius
        }"
    >
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: String,
                default: undefined
            },
            size: {
                type: String,
                default: undefined
            },
            radius: {
                type: String,
                default: 'var(--radius)'
            }
        }
    }
</script>

<style lang="scss">
  .ve-placeholder-button {
    position: relative;
    border-radius: var(--placeholder-button-radius);
    min-height: em(40px);
    max-width: var(--placeholder-button-width, auto);
    width: 100%;
    background-color: var(--color-bg-three);
    overflow: hidden;
    display: block;
    z-index: 0; // Fix overflow hidden when animating

    &--tiny {
      min-width: var(--placeholder-button-width, em(24px));
      min-height: em(24px);
    }

    &--small {
      min-width: var(--placeholder-button-width, em(32px));
      min-height: em(32px);
    }

    &--big {
      min-width: var(--placeholder-button-width, em(48px));
      min-height: em(48px);
    }

    &--xbig {
      min-width: var(--placeholder-button-width, em(56px));
      min-height: em(56px);
    }

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(to right, var(--color-bg-three) 0%, var(--color-bg-one) 15%, var(--color-bg-three) 30%);
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: placeholder;
      animation-timing-function: linear;
      overflow: hidden;
      background-size: 200% 200%;
      will-change: background-size;
    }
  }
</style>
