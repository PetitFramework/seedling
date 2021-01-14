<template>
    <div class="ve-title">
        <TextDefault :tag="tag" class="ve-title__title" :class="[ size && `ve-title__title--${size}` ]">
            <slot />
        </TextDefault>
        <TextDefault v-if="$slots.subtitle" class="ve-title__subtitle" :class="[ size && `ve-title__subtitle--${size}`]">
            <slot name="subtitle" width="8em" />
        </TextDefault>
    </div>
</template>

<script>
    import TextDefault from '@/components/Text'

    export default {
        components: {
            TextDefault
        },
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            size: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss">
  .ve-title {
    $this: &;

    position: relative;
    padding-left: em(19px);
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: em(4px);
    padding-bottom: em(2px);

    @include breakpoint(768px) {
      padding-left: em(27px);
    }

    &::before {
      content: "";
      width: em(3px);
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      background-color: var(--color-primary);
      border-radius: em(1.5px);
    }

    &--placeholder {
      &::before {
        background-color: var(--color-bg-three);
      }
    }

    &__title {
      text-transform: uppercase;
      color: var(--color-text-two);
      font-weight: 800;
      font-size: em(20px);

      @include breakpoint(768px) {
        --text-line-height: 1.2;

        font-size: em(30px);
      }

      &--small {
        font-size: em(18px);
      }

      &--tiny {
        font-size: em(14px);
        font-weight: 700;
      }
    }

    &__subtitle {
      font-size: em(12px);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: em(2px);
      padding-bottom: em(2px);

      @include breakpoint(768px) {
        font-size: em(14px);
      }

      &--small {
        padding-bottom: 0;

        @include breakpoint(768px) {
          font-size: em(12px);
        }
      }
    }
  }
</style>
