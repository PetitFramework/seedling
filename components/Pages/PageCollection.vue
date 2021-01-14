<template>
    <div class="page-collection">
        <PictureDefault class="page-collection__picture" :src="collection.image" />
        <Container>
            <TitleDefault
                class="page-collection__title"
                tag="h1"
                size="medium"
            >
                {{ collection.name }}
            </TitleDefault>
            <TextDefault class="page-collection__description">
                {{ collection.description }}
            </TextDefault>

            <SectionShowcase
                :title="'Sus relojes'"
                :items="collection.watches"
                path="/chasy/"
            />
        </Container>
    </div>
</template>

<script>
    import TextDefault from '@/components/Text'
    import TitleDefault from '@/components/Title'
    import Container from '@/components/Container'
    import SectionShowcase from '@/components/Sections/Showcase'
    import PictureDefault from '@/components/Picture'
    export default {
        components: {
            TitleDefault,
            Container,
            SectionShowcase,
            TextDefault,
            PictureDefault
        },
        data () {
            return {
                collection: {}
            }
        },
        async created () {
            this.collection = await this.getCollection()
        },
        methods: {
            async getCollection () {
                const { data } = await this.$repositories.collection.bySlug(
                    { slug: this.$route.params.id }
                )
                return data
            }
        }

    }
</script>

<style lang="scss">
  .page-collection {
    color: black;

    &__title {
      margin: 20px 0;
    }

    &__description {
      line-height: 1.1;
    }

    &__picture {
      height: 25vh;

      @include breakpoint($bp) {
        height: 50vh;
      }
    }
  }
</style>
