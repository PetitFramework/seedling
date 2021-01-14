<template>
    <component :is="tag" class="ve-dropdown-box" :class="{ 've-dropdown-box--active' : active }">
        <div class="ve-dropdown-box__inner">
            <slot />
        </div>
    </component>
</template>

<script>
    export default {
        props: {
            active: {
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
  .ve-dropdown-box {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    will-change: transform;
    top: 0;
    right: 0;
    height: auto;
    max-height: 50vh;
    background-color: var(--color-bg-one);
    border-radius: var(--radius);
    transform: rotateX(75deg);
    transform-origin: top;
    pointer-events: none;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    box-shadow: var(--shadow-two);

    &--active {
      transform: rotateX(0);
      pointer-events: auto;
      opacity: 1;
    }

    &__inner {
      width: calc(100% + #{em(40px)});
      overflow: hidden auto;
      padding-right: em(40px);
      height: 100%;
    }
  }
</style>
