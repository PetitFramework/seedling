<template>
    <component
        :is="setTag"
        :to="to"
        class="ve-button"
        :href="href"
        :class="[
            size && `ve-button--${size}`,
            variant && `ve-button--${variant}`,
            {
                've-button--icon' : !text && icon,
                've-button--right' : align === 'right',
                've-button--disabled' : disabled,
                've-button--shadow' : shadow,
                've-button--loading' : loading
            }
        ]"
        :disabled="setTag === 'button' && disabled"
    >
        <VeIcon v-if="icon" :social="social" class="ve-button__icon" :symbol="icon" />
        <span v-if="text" class="ve-button__text">
            {{ text }}
        </span>
    </component>
</template>

<script>
    import VeIcon from '@/components/IconDefault'

    export default {
        components: {
            VeIcon
        },
        props: {
            tag: {
                type: String,
                default: undefined
            },
            to: {
                type: [String, Object],
                default: undefined
            },
            href: {
                type: String,
                default: undefined
            },
            icon: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: 'medium'
            },
            variant: {
                type: String,
                default: ''
            },
            align: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            social: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            shadow: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            setTag () {
                if (this.to) {
                    return 'NuxtLink'
                } else if (this.href) {
                    return 'a'
                } else if (this.tag) {
                    return this.tag
                } else {
                    return 'button'
                }
            }
        }
    }
</script>

<style lang="scss">
  @mixin ve-button-hover {
    &.is-active:not(&--loading),
    &:active:not(&--loading),
    &:focus:not(&--loading),
    &:hover:not(&--loading) {
      &:not(:disabled) {
        @content;
      }
    }
  }

  .ve-button {
    $this: &;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    border-radius: var(--radius);
    transition: opacity 0.3s, color 0.3s, background-color 0.3s;
    color: var(--button-color);
    background-color: var(--button-bg-color);

    &:not(&--icon) {
      padding: em(8px) em(16px);

      #{$this}__icon {
        margin-left: em(8px);
      }

      &:not(#{$this}--right) {
        #{$this}__icon {
          margin-left: 0;
          margin-right: em(8px);
        }
      }
    }

    &:disabled:not(&--loading),
    &--disabled:not(&--loading) {
      opacity: 0.4;
      cursor: not-allowed;
    }

    @include ve-button-hover {
      color: var(--button-color-hover);
      background-color: var(--button-bg-color-hover);
    }

    &--shadow {
      box-shadow: var(--shadow-three);
    }

    &__text {
      font-weight: 600;
      line-height: 1.2;
      transform: translateY(em(-0.5px));
      z-index: 1;
      position: relative;
    }

    &--cta {
      color: var(--button-cta-color);
      background-color: var(--button-cta-bg-color);

      @include ve-button-hover {
        color: var(--button-cta-color-hover);
        background-color: var(--button-cta-bg-color-hover);
      }
    }

    &--primary {
      color: var(--button-primary-color);
      background-color: var(--button-primary-bg-color);

      @include ve-button-hover {
        color: var(--button-primary-color-hover);
        background-color: var(--button-primary-bg-color-hover);
      }
    }

    &--secondary {
      color: var(--button-secondary-color);
      background-color: var(--button-secondary-bg-color);

      @include ve-button-hover {
        color: var(--button-secondary-color-hover);
        background-color: var(--button-secondary-bg-color-hover);
      }
    }

    &--tertiary {
      color: var(--button-tertiary-color);
      background-color: var(--button-tertiary-bg-color);

      @include ve-button-hover {
        color: var(--button-tertiary-color-hover);
        background-color: var(--button-tertiary-bg-color-hover);
      }
    }

    &--twitch {
      color: var(--button-twitch-color);
      background-color: var(--button-twitch-bg-color);

      @include ve-button-hover {
        color: var(--button-twitch-color-hover);
        background-color: var(--button-twitch-bg-color-hover);
      }
    }

    &--discord {
      color: var(--button-discord-color);
      background-color: var(--button-discord-bg-color);

      @include ve-button-hover {
        color: var(--button-discord-color-hover);
        background-color: var(--button-discord-bg-color-hover);
      }
    }

    &--google {
      color: var(--button-google-color);
      background-color: var(--button-google-bg-color);

      @include ve-button-hover {
        color: var(--button-google-color-hover);
        background-color: var(--button-google-bg-color-hover);
      }
    }

    &--loading {
      cursor: progress;
      color: transparent;

      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: var(--radius);
        background-color: var(--button-bg-color-loading, transparent);
        z-index: 2;
      }

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        display: block;
        height: em(24px);
        width: em(24px);
        border: em(2px) solid;
        border-color: var(--button-color-loading, var(--color-white) rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.5));
        border-radius: 50%;
        transform-origin: 0 0;
        animation: spin 2s linear infinite;
        z-index: 3;
      }
    }

    &--tiny {
      min-width: em(24px);
      min-height: em(24px);

      &:not(#{$this}--icon) {
        padding: em(4px) em(8px);
      }

      #{$this}__text {
        font-size: em(12px);
      }

      #{$this}__icon {
        font-size: em(14px);
      }
    }

    &--small {
      min-width: em(32px);
      min-height: em(32px);

      #{$this}__text {
        font-size: em(14px);
      }

      #{$this}__icon {
        font-size: em(16px);
      }
    }

    &--medium {
      min-width: em(40px);
      min-height: em(40px);

      #{$this}__text {
        font-size: em(16px);
      }

      #{$this}__icon {
        font-size: em(16px);
      }
    }

    &--big {
      min-width: em(48px);
      min-height: em(48px);

      #{$this}__text {
        font-size: em(18px);
      }

      #{$this}__icon {
        font-size: em(18px);
      }
    }

    &--xbig {
      min-width: em(56px);
      min-height: em(56px);

      #{$this}__text {
        font-size: em(20px);
      }

      #{$this}__icon {
        font-size: em(24px);
      }
    }

    &--big-icon {
      min-width: em(40px);
      min-height: em(40px);
      padding-top: 0;
      padding-bottom: 0;

      #{$this}__text {
        font-size: em(16px);
      }

      #{$this}__icon {
        font-size: em(24px);
      }
    }

    &--right {
      #{$this}__icon {
        order: 3;
      }
    }
  }
</style>
