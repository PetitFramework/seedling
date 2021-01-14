<template>
    <component :is="tag" class="ve-header-dropdown" :class="{ 'is-active' : isActive }">
        <div class="ve-header-dropdown__inner">
            <slot />
        </div>
    </component>
</template>

<script>
    export default {
        props: {
            isActive: {
                type: Boolean,
                default: false
            },
            tag: {
                type: String,
                default: 'div'
            }
        }
    }
</script>

<style lang="scss">
  .ve-header-dropdown {
    position: fixed;
    top: var(--header-height);
    right: 0;
    height: calc(100% - var(--header-height));
    background-color: var(--color-bg-one);
    transform: translateX(110%);
    transition: transform 0.3s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    will-change: transform;

    @include breakpoint($bp) {
      top: var(--header-height);
      right: em(8px);
      margin-top: em(8px);
      height: auto;
      max-height: 70vh;
      background-color: var(--color-bg-one);
      border-radius: var(--radius);
      transform: rotateX(75deg);
      transform-origin: top;
      pointer-events: none;
      opacity: 0;
      transition: transform 0.3s, opacity 0.3s;
      box-shadow: var(--shadow-two);
    }

    &::after {
      @include breakpoint($bp down) {
        content: "";
        box-shadow: var(--shadow-four);
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: em(1px);
        transform: translateY(em(-1px));
        width: 100%;
        z-index: 2;
      }
    }

    &.is-active {
      transform: translateX(0);

      @include breakpoint($bp) {
        transform: rotateX(0);
        pointer-events: auto;
        opacity: 1;
      }
    }

    &__inner {
      width: calc(100% + #{em(40px)});
      overflow: hidden auto;
      padding-right: em(40px);
      height: 100%;
    }
  }
</style>
