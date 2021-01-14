<template>
    <div class="details-calibre">
        <div class="details-calibre__title">
            Calibres
        </div>
        <div
            v-for="calibre in calibres"
            :key="calibre.id"
            class="details-calibre__entry"
        >
            <div>{{ getFlag(calibre.origin) }}</div>
            <div>{{ calibre.name }}</div>
        </div>
    </div>
</template>

<script>
    import getFlag from '@/utils/flags'

    export default {
        props: {
            calibres: {
                type: Array,
                default: () => ([])
            }
        },
        methods: {
            getFlag (origin) {
                return getFlag(origin)
            }
        }
    }
</script>

<style lang="scss">
  .details-calibre {
    display: grid;
    padding: 5px;

    &__title {
      font-weight: bold;
      font-size: 16px;
      line-height: 1.1;
      padding: 5px 0;
    }

    &__entry {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 10px;
      font-weight: bold;
    }
  }
</style>
