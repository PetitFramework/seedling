<template>
    <button class="ve-action-button" :class="{ 'is-active' : active }">
        <VeIcon class="ve-action-button__icon" :symbol="icon" />
        <span v-if="alerts" class="ve-action-button__alert">
            <span class="ve-action-button__alert-text">
                {{ numAlerts }}
            </span>
        </span>
    </button>
</template>

<script>
    import VeIcon from '@/components/IconDefault'

    export default {
        components: {
            VeIcon
        },
        props: {
            icon: {
                type: String,
                default: undefined
            },
            alerts: {
                type: [Boolean, Number],
                default: false
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            numAlerts () {
                if (this.alerts >= 5) {
                    return '+5'
                } else {
                    return this.alerts
                }
            }
        }
    }
</script>

<style lang="scss">
  .ve-action-button {
    $this: &;

    display: flex;
    align-items: center;
    justify-content: center;
    min-height: var(--header-height);
    min-width: var(--header-height);
    padding: em(16px);
    transition: color 0.3s;
    position: relative;

    &:active:not(.is-active),
    &:focus:not(.is-active),
    &:hover:not(.is-active) {
      color: var(--color-text-two);
    }

    &.is-active {
      color: var(--color-text-two);
    }

    &__icon {
      font-size: em(24px);
      cursor: pointer;
    }

    &__alert {
      height: em(18px);
      min-width: em(18px);
      background-color: var(--color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      top: em(8px);
      right: em(8px);
      z-index: 2;

      &-text {
        color: var(--color-white);
        font-size: em(10px);
        font-weight: 700;
      }
    }
  }
</style>
