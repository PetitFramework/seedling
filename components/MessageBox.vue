<template>
    <div class="ve-message-box">
        <slot />
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
  .ve-message-box {
    background-color: var(--color-bg-three);
    padding: em(16px);
    border-radius: var(--radius);
    border: em(1px) solid var(--color-error);
  }
</style>
