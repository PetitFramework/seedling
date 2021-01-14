<template>
    <div
        class="ve-input"
        :class="[
            variant && `ve-input--${variant}`,
            size && `ve-input--${size}`
        ]"
    >
        <div class="ve-input__wrap">
            <input
                :id="id"
                ref="input"
                :type="type"
                class="ve-input__element"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                :value="value"
                :min="min"
                :max="max"
                :required="required"
                :readonly="readonly"
                :disabled="disabled"
                @input="updateInput"
            >
            <TextDefault v-if="$slots.default" tag="label" :for="id" class="ve-input__label">
                <slot />
            </TextDefault>
            <VeIcon class="ve-input__error-icon" symbol="block" />
        </div>
        <div v-if="$slots.box" class="ve-input__box">
            <slot name="box" />
        </div>
        <div v-if="$slots.errors" class="ve-input__errors">
            <slot name="errors" />
        </div>
    </div>
</template>

<script>
    import TextDefault from '@/components/Text'
    import VeIcon from '@/components/IconDefault'

    export default {
        components: {
            TextDefault,
            VeIcon
        },
        props: {
            id: {
                type: String,
                default: undefined
            },
            label: {
                type: String,
                default: undefined
            },
            placeholder: {
                type: [Number, String],
                default: undefined
            },
            variant: {
                type: String,
                default: undefined
            },
            size: {
                type: String,
                default: undefined
            },
            value: {
                type: [Number, String, Boolean],
                default: undefined
            },
            autocomplete: {
                type: String,
                default: undefined
            },
            type: {
                type: String,
                default: 'text'
            },
            focus: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            min: {
                type: Number,
                default: undefined
            },
            max: {
                type: Number,
                default: undefined
            }
        },
        watch: {
            focus (value) {
                if (value) {
                    this.$emit('focus', value)
                    this.$refs.input.focus()
                }
            }
        },
        methods: {
            updateInput ({ target }) {
                this.$emit('input', target.value)
            }
        }
    }
</script>

<style lang="scss">
  .ve-input {
    $this: &;

    &__wrap {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    &__element {
      height: em(40px);
      outline: none;
      border-radius: var(--radius);
      background-color: var(--color-bg-one);
      width: 100%;
      color: var(--color-text);
      padding-left: em(16px);
      padding-right: em(16px);
      font-size: em(16px);
      font-weight: 600;
      font-family: inherit;
      border: em(3px) solid transparent;
      transition: border-color 0.3s;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type=number] {
        -moz-appearance: textfield;
      }

      &::placeholder {
        color: inherit;
        font-weight: inherit;
        font-size: 1em;
        font-family: inherit;
        opacity: 0.5;
      }

      &:disabled,
      &[readonly] {
        cursor: not-allowed;
      }

      &:focus:not(:disabled):not([readonly]),
      &:hover:not(:disabled):not([readonly]) {
        border-left-color: var(--color-primary);
      }
    }

    &__label {
      order: -1;
      margin-bottom: em(8px);
      font-weight: 600;
      color: var(--color-text-two);
    }

    &__box {
      margin-top: em(8px);
    }

    &__error-icon {
      color: var(--color-error);
      right: em(8px);
      bottom: em(8px);
      position: absolute;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;

      &::before {
        font-size: em(24px);
      }
    }

    &__errors {
      font-size: em(12px);
      margin-top: em(8px);
      display: none;
      font-weight: 600;
    }

    &.has-errors {
      #{$this}__element {
        padding-right: em(40px);
      }

      #{$this}__error-icon {
        opacity: 1;
      }

      #{$this}__errors {
        display: block;
      }
    }

    &--secondary {
      #{$this} {
        &__element {
          background-color: var(--color-bg-two);
        }
      }
    }

    &--small {
      #{$this} {
        &__element {
          font-size: em(14px);
          height: 2.286em;
          padding-left: 1.143em;
          padding-right: 1.143em;
        }

        &__error-icon {
          right: em(6px);
          bottom: em(6px);

          &::before {
            font-size: em(20px);
          }
        }
      }
    }
  }
</style>
