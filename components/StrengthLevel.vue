<template>
    <div
        class="ve-strength-level"
        :class="{
            've-strength-level--very-low' : strength === 1,
            've-strength-level--low' : strength === 2,
            've-strength-level--medium' : strength === 3,
            've-strength-level--hard' : strength >= 4
        }"
    >
        <div
            v-for="(level, index) in levels"
            :key="level"
            class="ve-strength-level__level"
            :class="{ 'is-active' : strength >= index + 1 }"
        ></div>
    </div>
</template>

<script>
    export default {
        props: {
            levels: {
                type: Number,
                default: 4
            },
            strength: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style lang="scss">
  .ve-strength-level {
    $this: &;

    display: grid;
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    grid-gap: em(8px);

    &__level {
      height: em(4px);
      background-color: var(--color-bg-two);
      border-radius: em(1.5px);
    }

    &--very-low {
      #{$this}__level.is-active {
        background-color: var(--color-error);
      }
    }

    &--low {
      #{$this}__level.is-active {
        background-color: var(--color-error);
      }
    }

    &--medium {
      #{$this}__level.is-active {
        background-color: var(--color-warning);
      }
    }

    &--hard {
      #{$this}__level.is-active {
        background-color: var(--color-success);
      }
    }
  }

</style>
