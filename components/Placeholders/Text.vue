<template>
    <div
        class="ve-placeholder-text"
        :class="{ 've-placeholder-text--one' : variant === 'one' }"
        :style="`--placeholder-text-height: ${height}; --placeholder-text-width: ${width}; --placeholder-text-radius: ${radius}`"
    >
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: String,
                default: '5em'
            },
            height: {
                type: String,
                default: 'calc(1em * var(--ve-text-line-height, 1.4))'
            },
            radius: {
                type: String,
                default: 'var(--radius)'
            },
            variant: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .ve-placeholder-text {
    --ve-placeholder-text-bg-color-animation: var(--color-bg-three);
    --ve-placeholder-text-bg-color-animation-alt: var(--color-bg-one);

    position: relative;
    border-radius: var(--placeholder-text-radius);
    min-height: var(--placeholder-text-height);
    max-width: var(--placeholder-text-width);
    width: 100%;
    background-color: var(--color-bg-three);
    overflow: hidden;
    display: block;
    z-index: 0; // Fix overflow hidden when animating

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(to right, var(--ve-placeholder-text-bg-color-animation) 0%, var(--ve-placeholder-text-bg-color-animation-alt) 15%, var(--ve-placeholder-text-bg-color-animation) 30%);
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: placeholder;
      animation-timing-function: linear;
      overflow: hidden;
      background-size: 200% 200%;
      will-change: background-size;
    }

    &--one {
      --ve-placeholder-text-bg-color-animation: var(--color-bg-one);
      --ve-placeholder-text-bg-color-animation-alt: var(--color-bg-three);
    }
  }
</style>
