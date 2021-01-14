<template>
    <component :is="tag" class="ve-popover">
        <component
            :is="tag"
            ref="parent"
            v-click-outside="{ handler: close, exclude: ['.ve-popover__box'] }"
            class="ve-popover__ref"
            @click="open"
        >
            <slot />
        </component>
        <teleport to="body" slim>
            <div ref="box" class="ve-popover__box" :class="{ 've-popover__box--active' : isOpen }">
                <div class="ve-popover__inner" :class="{ 've-popover__inner--active' : isOpen }">
                    <div class="ve-popover__arrow" data-popper-arrow></div>
                    <slot name="box" />
                </div>
            </div>
        </teleport>
    </component>
</template>

<script>
    export default {
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            arrow: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                popperIntance: null,
                isOpen: false
            }
        },
        methods: {
            open () {
                if (!this.isOpen) this.isOpen = true
                if (!this.popperIntance) {
                    this.popperIntance = this.$popper.createPopper({
                        parent: this.$refs.parent,
                        child: this.$refs.box,
                        options: {
                            placement: 'top'
                        }
                    })
                }
            },
            close () {
                if (this.isOpen) this.isOpen = false
            }
        }
    }
</script>

<style lang="scss">
  .ve-popover {
    $this: &;

    &__ref {
      cursor: pointer;
    }

    &__box {
      position: absolute;
      z-index: var(--z-index-bishop);
      bottom: 0;
      left: 0;
      pointer-events: none;
      padding: em(8px);

      &--active {
        pointer-events: auto;
      }

      &[data-popper-placement^='top'] #{$this}__arrow {
        bottom: em(-4px);
      }

      &[data-popper-placement^='bottom'] #{$this}__arrow {
        top: em(-4px);
      }

      &[data-popper-placement^='left'] #{$this}__arrow {
        right: em(-4px);
      }

      &[data-popper-placement^='right'] #{$this}__arrow {
        left: em(-4px);
      }
    }

    &__inner {
      background-color: var(--color-bg-one);
      box-shadow: var(--shadow-two);
      border-radius: var(--radius);
      opacity: 0;
      transform: translateY(em(-16px));
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
      position: relative;

      &--active {
        transform: translateY(0);
        opacity: 1;
      }
    }

    &__arrow,
    &__arrow::before {
      position: absolute;
      width: em(8px);
      height: em(8px);
      z-index: -1;
    }

    &__arrow {
      &::before {
        content: '';
        transform: rotate(45deg);
        background: var(--color-bg-one);
      }
    }
  }
</style>
