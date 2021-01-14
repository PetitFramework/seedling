<template>
    <div
        class="ve-placeholder-picture"
        :class="{ 've-placeholder-picture--shadow' : shadow }"
        :style="`--placeholder-picture-height-ratio: ${ratioHeight}; --placeholder-picture-width-ratio: ${ratioWidth}; --placeholder-picture-radius: ${radius}`"
    >
    </div>
</template>

<script>
    export default {
        props: {
            ratioWidth: {
                type: [Number, String],
                default: 16
            },
            ratioHeight: {
                type: [Number, String],
                default: 9
            },
            radius: {
                type: [Number, String],
                default: 'var(--radius)'
            },
            shadow: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
  .ve-placeholder-picture {
    position: relative;
    border-radius: var(--placeholder-picture-radius);
    background-color: var(--color-bg-three);
    overflow: hidden;
    z-index: 0; // Fix overflow hidden when animating

    &--shadow {
      box-shadow: var(--shadow-three);
    }

    &::before {
      content: "";
      display: block;
      width: 100%;
      padding-top: calc(var(--placeholder-picture-height-ratio) / var(--placeholder-picture-width-ratio) * 100%);
      background: linear-gradient(to right, var(--color-bg-three) 5%, var(--color-bg-one) 20%, var(--color-bg-three) 30%);
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: placeholder;
      animation-timing-function: linear;
      background-size: 200% 200%;
      will-change: background-size;
    }
  }
</style>
