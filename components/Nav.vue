<template>
    <div
        v-click-outside="{ handler: close }"
        v-scroll-lock="{ id: 'Nav', lock: isActive }"
    >
        <Hamburger :active="isActive" @click.native="toggle" />
        <nav class="ve-nav" :class="{ 'is-active' : isActive }">
            <div class="ve-nav__inner">
                <div class="ve-nav__featured">
                    <button class="ve-nav__icon is-active" data-tippy-content="VostokEurope">
                        <LogoIcon />
                    </button>
                </div>
            </div>
            <div class="ve-nav__list-inner">
                <NavList @onClick="close" />
            </div>
        </nav>
    </div>
</template>

<script>
    import Hamburger from '@/components/Hamburger'
    import LogoIcon from '@/components/LogoIcon'
    import NavList from '@/components/NavList'

    export default {
        name: 'Nav',
        components: {
            Hamburger,
            LogoIcon,
            NavList
        },
        data () {
            return {
                isActive: false
            }
        },
        mounted () {
            this.initTooltips()
        },
        methods: {
            toggle () {
                this.isActive = !this.isActive
            },
            close () {
                if (this.isActive) {
                    this.isActive = false
                }
            },
            initTooltips () {
                this.$tippy.createTippy({
                    element: this.$el.querySelectorAll('[data-tippy-content]'),
                    options: {
                        placement: 'right',
                        animation: 'shift-toward-extreme',
                        touch: false
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
  .ve-nav {
    $this: &;

    position: fixed;
    left: 0;
    top: var(--header-height);
    background-color: var(--color-bg-two);
    height: calc(100% - var(--header-height));
    display: grid;
    grid-template-columns: em(56px) 1fr;
    transform: translateX(-110%);
    transition: transform 0.3s;
    width: var(--nav-width);
    will-change: transform;

    &.is-active {
      transform: translateX(0);
    }

    @include breakpoint($bp) {
      display: none;
      width: auto;
      grid-template-columns: em(56px);
      transform: translateX(0);
      height: calc(100% - var(--header-height));
    }

    &__inner {
      background-color: var(--color-bg-one);
      min-width: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    &__featured {
      flex-shrink: 0;
    }

    &__icons {
      overflow: hidden auto;
      min-width: em(104px);
      display: flex;
      flex-direction: column;
      border-top: em(1px) solid var(--color-border-two);
      border-bottom: em(1px) solid var(--color-border-two);
    }

    &__icon {
      display: flex;
      align-items: center;
      width: 100%;
      min-height: em(56px);
      padding-top: em(12px);
      padding-bottom: em(12px);
      padding-left: em(12px);
      position: relative;
      max-width: em(56px);
      z-index: 1;

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: em(2px);
        height: em(16px);
        background-color: transparent;
        border-top-right-radius: em(2px);
        border-bottom-right-radius: em(2px);
        transition: background-color 0.3s;
      }

      &.is-active,
      &:active,
      &:focus,
      &:hover {
        &::before {
          background-color: var(--color-primary);
        }
      }

      &.is-active {
        position: sticky;
        top: 0;
        z-index: 2;
        order: -1;
        background-color: var(--color-bg-two);

        @include breakpoint($bp) {
          background-color: var(--color-bg-one);
        }

        &::before {
          height: em(32px);
        }
      }

      svg {
        max-width: em(32px);
      }
    }

    &__picture {
      --picture-height-ratio: 1;
      --picture-width-ratio: 1;

      height: em(32px);
      width: em(32px);
      overflow: hidden;
      border-radius: var(--radius-two);
    }

    &__box {
      flex-grow: 1;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      padding-bottom: em(4px);
    }

    &__add {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: em(16px);
      margin-bottom: em(16px);

      &-box {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius);
        height: em(32px);
        width: em(32px);
        background-color: var(--button-secondary-bg-color);
        color: var(--button-secondary-color);
        transition: background-color 0.3s, color 0.3s;
      }

      &-icon {
        font-size: em(24px);
      }

      &.is-active,
      &:active,
      &:focus,
      &:hover {
        #{$this}__add-box {
          background-color: var(--button-primary-bg-color);
          color: var(--button-primary-color);
        }
      }
    }

    &__action {
      display: block;
      padding-top: em(12px);
      padding-bottom: em(12px);
      padding-left: em(16px);
      transition: color 0.3s;

      &:nth-child(2) {
        margin-top: auto;
      }

      &.is-active,
      &:active,
      &:focus,
      &:hover {
        color: var(--color-text-two);
      }

      &-icon {
        font-size: em(24px);
      }
    }

    &__list-inner {
      min-width: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      @include breakpoint($bp) {
        display: none;
      }
    }
  }
</style>
