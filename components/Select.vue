<template>
    <div
        ref="select"
        v-click-outside="{ handler: close }"
        class="ve-select"
        :class="[
            size && `ve-select--${size}`,
            variant && `ve-select--${variant}`,
            {
                've-select--active' : open,
                've-select--disabled' : disabled,
                've-select--loading' : loading
            }
        ]"
    >
        <div
            class="ve-select__toggle"
            :class="{ 've-select__toggle--shadow' : shadow }"
            @click="toggle"
        >
            <TextDefault class="ve-select__text">
                {{ selected.label }}
            </TextDefault>
            <div class="ve-select__icon">
                <span v-if="!open" class="ve-select__icon">
                    <span :class="[ icon && `ve-icon-${icon}` ]"></span>
                </span>
                <span v-else class="ve-icon-cross"></span>
            </div>
        </div>
        <teleport to="body">
            <div ref="dropdown" class="ve-select__dropdown" :class="{ 've-select__dropdown--active' : open }">
                <DropdownBox :active="open">
                    <button
                        v-for="(option, i) of options"
                        :key="i"
                        class="ve-select__item"
                        :class="{ 'is-active' : selected.value === option.value }"
                        @click.prevent="onSelected(option)"
                    >
                        <TextDefault class="ve-select__item-text" :class="[ size && `ve-select__item-text--${size}` ]">
                            {{ option.label }}
                        </TextDefault>
                    </button>
                </DropdownBox>
            </div>
        </teleport>
    </div>
</template>

<script>
    import DropdownBox from '@/components/DropdownBox'
    import TextDefault from '@/components/Text'

    export default {
        components: {
            DropdownBox,
            TextDefault
        },
        props: {
            options: {
                type: Array,
                required: true
            },
            default: {
                type: String,
                default: null
            },
            size: {
                type: String,
                default: undefined
            },
            variant: {
                type: String,
                default: undefined
            },
            shadow: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: 'angle-bottom'
            }
        },
        data () {
            return {
                selected: this.default
                    ? this.options.find(option => option.value === this.default)
                    : this.options.length > 0
                        ? this.options[0]
                        : null,
                open: false,
                animating: false
            }
        },
        mounted () {
            this.$resize.observer(document.body, () => this.close())
        },
        methods: {
            toggle () {
                this.open ? this.close() : this.drop()
            },
            drop () {
                if (!this.open && !this.animating) {
                    this.open = true
                    this.popperIntance = this.$popper.createPopper({
                        parent: this.$refs.select,
                        child: this.$refs.dropdown,
                        options: {
                            placement: 'bottom-end'
                        }
                    })
                }
            },
            close () {
                if (this.open) {
                    this.open = false
                    this.animating = true
                    setTimeout(() => {
                        if (this.popperIntance) this.popperIntance.destroy()
                        this.animating = false
                    }, 300)
                }
            },
            onSelected (option) {
                this.selected = option
                this.open = false
                this.$emit('input', option)
            }
        }
    }
</script>

<style lang="scss">
  .ve-select {
    $this: &;

    position: relative;
    width: 100%;

    &--disabled {
      cursor: not-allowed;

      #{$this}__toggle {
        pointer-events: none;
      }
    }

    &--loading {
      cursor: wait;

      #{$this}__toggle {
        pointer-events: none;
      }
    }

    &__toggle {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      grid-gap: em(8px);
      background-color: var(--color-bg-one);
      border-radius: var(--radius);
      height: em(40px);
      padding-left: em(16px);
      overflow: hidden;
      cursor: pointer;

      &--shadow {
        box-shadow: var(--shadow);
      }
    }

    &__text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
      pointer-events: none;
    }

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: em(40px);
      transition: color 0.3s, background-color 0.3s;
      pointer-events: none;

      span {
        font-size: em(20px);
      }
    }

    &__list {
      border-radius: var(--radius);
      box-shadow: var(--shadow-two);
      background-color: var(--color-bg-one);
      transform: rotateX(75deg);
      transition: transform 0.3s;
      transform-origin: top;
      overflow: hidden;
    }

    &__item {
      display: block;
      width: 100%;
      padding: em(8px) em(16px);
      transition: color 0.3s;

      &:first-child {
        padding-top: em(16px);
      }

      &:last-child {
        padding-bottom: em(16px);
      }

      &:active:not(.is-active),
      &:focus:not(.is-active),
      &:hover:not(.is-active) {
        color: var(--color-text-two);
      }

      &.is-active {
        color: var(--color-primary);
      }

      &-text {
        font-weight: 600;
        pointer-events: none;

        &--small {
          font-size: em(14px);
        }
      }
    }

    &__input {
      display: none;
    }

    &__dropdown {
      position: absolute;
      top: 0;
      right: 0;
      padding-top: em(8px);
      padding-bottom: em(8px);
      width: em(256px);
      opacity: 0;
      pointer-events: none;
      z-index: var(--z-index-bishop);
      transition: opacity 0.3s;

      &--active {
        pointer-events: auto;
        opacity: 1;
      }
    }

    &--active,
    &:active,
    &:focus,
    &:hover {
      #{$this}__icon {
        color: var(--color-primary);
      }
    }

    &--secondary {
      #{$this} {
        &__toggle {
          background-color: var(--color-bg-two);
        }
      }
    }

    &--small {
      #{$this} {
        &__toggle {
          height: em(32px);
        }

        &__text {
          font-size: em(14px);
        }

        &__icon {
          width: em(32px);

          span {
            font-size: em(16px);
          }
        }
      }
    }
  }
</style>
