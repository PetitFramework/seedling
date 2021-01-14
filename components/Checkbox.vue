<template>
    <div
        class="ve-checkbox"
        :class="[
            variant && `ve-checkbox--${variant}`
        ]"
    >
        <div class="ve-checkbox__wrap">
            <input
                :id="id"
                :value="value"
                type="checkbox"
                class="ve-checkbox__element"
                :checked="checked"
                :required="required"
                @input="updateInput"
            >
            <div class="ve-checkbox__check" :class="{ 'is-active' : checked }">
                <VeIcon class="ve-checkbox__check-icon" symbol="check" />
            </div>
            <label :for="id" class="ve-checkbox__label">
                <span class="ve-checkbox__label-text">
                    <slot />
                </span>
            </label>
        </div>
        <div v-if="$slots.errors" class="ve-checkbox__errors">
            <slot name="errors" />
        </div>
    </div>
</template>

<script>
    import VeIcon from '@/components/IconDefault'

    export default {
        components: {
            VeIcon
        },
        props: {
            id: {
                type: String,
                default: 'checkbox'
            },
            variant: {
                type: String,
                default: ''
            },
            value: {
                type: [String, Boolean],
                default: undefined
            },
            required: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                checked: this.value
            }
        },
        methods: {
            updateInput ({ value }) {
                this.checked = !this.checked
                this.$emit('input', this.checked)
            }
        }
    }
</script>

<style lang="scss">
  .ve-checkbox {
    $this: &;

    &__wrap {
      position: relative;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: em(16px);
    }

    &__element {
      height: em(24px);
      width: em(24px);
      font-size: em(16px);
      grid-row: 1/2;
      grid-column: 1/2;
      border: 0;
      opacity: 0;
      cursor: pointer;
    }

    &__check {
      height: em(24px);
      width: em(24px);
      background-color: var(--color-bg-one);
      grid-row: 1/2;
      grid-column: 1/2;
      border-radius: var(--radius);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      color: var(--color-primary);
      pointer-events: none;

      &.is-active {
        #{$this}__check-icon {
          opacity: 1;
        }
      }

      &-icon {
        pointer-events: none;
        transition: opacity 0.3s;
        opacity: 0;
      }
    }

    // &__label {
    //   // adsa das
    // }

    &__label-text {
      line-height: 1.4;
      font-weight: 600;
    }

    &__errors {
      font-size: em(12px);
      margin-top: em(8px);
      display: none;
      font-weight: 600;
    }

    &.has-errors {
      #{$this}__errors {
        display: block;
      }
    }

    &--secondary {
      #{$this}__check {
        background-color: var(--color-bg-two);
      }
    }
  }

</style>
