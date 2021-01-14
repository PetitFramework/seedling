<template>
    <div class="ve-showcase">
        <div class="ve-showcase__heading">
            <TitleDefault
                class="ve-showcase__title"
                tag="h2"
                size="medium"
            >
                {{ title }}
            </TitleDefault>
            <NuxtLink v-if="more" :to="more" class="ve-showcase__more">
                Ver todos
            </NuxtLink>
            <div v-if="anchor" :id="anchor" class="ve-showcase__anchor">
            </div>
        </div>
        <div class="ve-showcase__items">
            <CardBasic
                v-for="item in items"
                :key="item.id"
                :title="item.name"
                :price="item.price"
                :to="path + item.slug"
                :image="item.images && item.images.length ? item.images[0].src : ''"
            />
        </div>
    </div>
</template>

<script>
    import TitleDefault from '@/components/Title'
    import CardBasic from '@/components/Cards/Basic'

    export default {
        components: {
            TitleDefault,
            CardBasic
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            anchor: {
                type: String,
                default: ''
            },
            more: {
                type: String,
                default: ''
            },
            items: {
                type: Array,
                default: () => ([])
            },
            path: {
                type: String,
                default: ''
            }
        }

    }
</script>
<style lang="scss">
  .ve-showcase {
    display: grid;
    margin: 20px 0;

    &__heading {
      position: relative;
      display: flex;
      margin-bottom: 20px;
      align-items: center;
    }

    &__anchor {
      position: absolute;
      bottom: 100px;
    }

    &__more {
      padding: 0 10px;
      text-align: right;
      line-height: 1.3;
      text-decoration: underline;
      cursor: pointer;
      font-size: 12px;
    }

    &__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

      @include breakpoint($bp) {
        grid-template-columns: repeat(auto-fill, 150px);
      }
    }
  }
</style>
