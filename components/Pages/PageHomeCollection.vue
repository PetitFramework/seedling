<template>
    <div class="page-home-collection">
        <Container>
            <div class="page-home-collection__heading">
                <TitleDefault
                    class="page-home-collection__title"
                    tag="h1"
                    size="medium"
                >
                    Todas las Colecciones de Vostok Europe
                </TitleDefault>
                <TextDefault class="page-home-collection__description">
                    Disfruta de las mejores colecciones de vostok europa, la más adaptada para ti, etc, etc, etc. kajsdkl kljdas lkjada klajsda lkjasda kjsda. Disfruta de las mejores colecciones de vostok europa, la más adaptada para ti, etc, etc, etc. kajsdkl kljdas lkjada klajsda lkjasda kjsda. Disfruta de las mejores colecciones de vostok europa, la más adaptada para ti, etc, etc, etc. kajsdkl kljdas lkjada klajsda lkjasda kjsda.
                </TextDefault>
                <AnchorText field="name" :items="collections" />
            </div>
            <SectionShowcase
                v-for="collection in collections"
                :key="collection.id"
                :anchor="collection.name"
                :more="`/collekciya/${collection.slug}`"
                :title="collection.name"
                :items="collection.watches"
                path="/chasy/"
            />
        </Container>
    </div>
</template>

<script>
    import TitleDefault from '@/components/Title'
    import TextDefault from '@/components/Text'
    import Container from '@/components/Container'
    import AnchorText from '@/components/Anchor/Text'
    import SectionShowcase from '@/components/Sections/Showcase'
    export default {
        components: {
            Container,
            SectionShowcase,
            TitleDefault,
            AnchorText,
            TextDefault
        },
        data () {
            return {
                collections: []
            }
        },
        async created () {
            this.collections = await this.getCollections()
        },
        methods: {
            async getCollections () {
                const { data } = await this.$repositories.collection.getAll()
                return data
            }
        }

    }
</script>

<style lang="scss">
  .page-home-collection {
    padding: 20px 0;

    &__title {
      margin: 20px 0;
    }
  }
</style>
