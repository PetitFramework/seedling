<template>
    <TextDefault class="ve-validate-msg" tag="div">
        <VeIcon class="ve-validate-msg__icon" :symbol="icon" />
        <span class="ve-validate-msg__text">
            {{ msg }}
            <slot />
        </span>
    </TextDefault>
</template>

<script>
    import VeIcon from '@/components/IconDefault'
    import TextDefault from '@/components/Text'

    export default {
        components: {
            VeIcon,
            TextDefault
        },
        props: {
            msg: {
                type: [String, Function, Object],
                default: undefined
            },
            icon: {
                type: String,
                default: 'block'
            }
        }
    }
</script>

<style lang="scss">
  .ve-validate-msg {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: em(8px);
    align-items: baseline;

    & + & {
      margin-top: 0.25em;
    }

    &__icon {
      font-size: 1.2em;
      transform: translateY(0.15em);
      color: var(--color-error);
      line-height: 1;
    }

    &__text {
      color: var(--color-text-two);
      font-weight: 600;
    }
  }
</style>
