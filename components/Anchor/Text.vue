<template>
    <div class="ve-anchor-image">
        <a
            v-for="item in items"
            :key="item.id"
            class="ve-anchor-image__item"
            :href="`#${item[field]}`"
        >
            <div class="ve-anchor-image__title">
                {{ item.name }}
            </div>
        </a>
    </div>
</template>

<script>

    export default {
        components: {
        },
        props: {
            items: {
                type: Array,
                default: () => ([])
            },
            field: {
                type: String,
                default: 'id'
            }
        }
    }
</script>

<style lang="scss" scoped>
  .ve-anchor-image {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-content: center;
    padding: 20px 0;
    grid-gap: 10px;
    align-items: center;

    &__title {
      font-weight: bold;
    }
  }
</style>
