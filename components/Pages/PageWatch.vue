<template>
    <div class="page-watch">
        <TitleDefault
            class="page-watch__title"
            tag="h1"
            size="medium"
        >
            <div class="page-watch__name">
                <span class="page-watch__main">{{ watch.name }}</span>
                <span
                    v-if="watch.name !== watch.model"
                    class="page-watch__subtitle"
                >{{ watch.model }}</span>
            </div>
            <span class="page-watch__collection">{{ watch && watch.collection ? watch.collection.name : '' }}</span>
        </TitleDefault>
        <div class="page-watch__wrapper">
            <PicturesGallery :images="watch.images" />
            <CardProduct :product="watch" />
        </div>
    </div>
</template>

<script>

    import PicturesGallery from '@/components/Pictures/Gallery'
    import TitleDefault from '@/components/Title'
    import CardProduct from '@/components/Cards/Product'

    export default {
        components: {
            PicturesGallery,
            TitleDefault,
            CardProduct
        },
        data () {
            return {
                watch: {}
            }
        },
        async created () {
            this.watch = await this.getWatch()
        },
        methods: {
            async getWatch () {
                const { data } = await this.$repositories.watch.bySlug(
                    { slug: this.$route.params.id }
                )
                return data
            }
        }

    }
</script>

<style lang="scss">
  .page-watch {
    padding: 20px 0;

    &__wrapper {
      display: grid;

      @include breakpoint($bp) {
        padding: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
</style>
