<template>
    <div class="ve-page-home">
        <BannerHero
            :items="collections"
            :time="5"
            :path="'/collekciya/'"
        />
        <div class="ve-page-home__content">
            <Container>
                <SectionShowcase :title="'Novedades'" :items="news" path="/chasy/" />
                <SectionShowcase :title="'Destacados'" :items="news" path="/chasy/" />
                <SectionShowcase :title="'Ofertas'" :items="news" path="/chasy/" />
            </Container>
        </div>
    </div>
</template>

<script>
    import Container from '@/components/Container'
    import BannerHero from '@/components/Banners/Hero'
    import SectionShowcase from '@/components/Sections/Showcase'
    export default {
        components: {
            Container,
            BannerHero,
            SectionShowcase
        },
        data () {
            return {
                collections: [],
                news: []
            }
        },
        async created () {
            this.collections = await this.getCollections()
            this.news = await this.getNewWatches()
            // console.log(Vueing)
        },
        methods: {
            async getCollections () {
                const { data } = await this.$repositories.collection.getAll()
                return data
            },
            async getNewWatches () {
                const { data } = await this.$repositories.watch.getNews()
                return data
            }
        }
    }
</script>

<style lang="scss">
  .ve-page-home {
    padding-bottom: var(--gap-wrapper);

    &__content {
      padding: 20px 0;
    }
  }
</style>
