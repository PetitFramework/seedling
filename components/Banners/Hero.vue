<template>
    <div class="ve-banner-hero">
        <div
            v-for="(item, i) in items"
            :key="item.id"
            class="ve-banner-hero__entry"
            :class="{'is-active': activeItem === i, 'is-last': lastActiveItem === i}"
            @click="goTo(`${path}${item.slug}`)"
        >
            <img class="ve-banner-hero__image" :src="item.image">
            <div class="ve-banner-hero__overlay">
                <TitleDefault
                    class="ve-banner-hero__title"
                    tag="h2"
                    size="medium"
                >
                    {{ item.name }}
                </TitleDefault>
            </div>
        </div>
    </div>
</template>

<script>
    import TitleDefault from '@/components/Title'

    export default {
        components: {
            TitleDefault
        },
        props: {
            items: {
                type: Array,
                default: () => ([])
            },
            time: {
                type: Number,
                default: 3
            },
            path: {
                type: String,
                default: '/'
            }
        },
        data () {
            return {
                interval: '',
                lastActiveItem: this.items.length - 1,
                activeItem: 0
            }
        },
        mounted () {
            this.startTimer()
        },
        methods: {
            startTimer () {
                this.interval = setInterval(this.tick, this.time * 1000)
            },
            tick () {
                this.lastActiveItem = this.activeItem
                this.activeItem = (this.activeItem + 1) % this.items.length
            },
            goTo (route) {
                this.$router.push(route)
            }
        }
    }
</script>

<style lang="scss">
  .ve-banner-hero {
    position: relative;
    height: 60vh;
    width: 100%;
    overflow: hidden;

    &__title {
      font-size: 1.3rem;

      .ve-title__title {
        color: var(--color-lyra);
      }

      text-transform: capitalize;
    }

    &__entry {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(100%);
      z-index: 2;

      img {
        height: 100%;
        width: 100%;
      }

      &.is-active {
        transition: transform 0.5s linear;
        transform: translateX(0);
        z-index: 3;
      }

      &.is-last {
        transition: transform 0.5s linear;
        transform: translateX(-100%);
        z-index: -1;
      }
    }

    &__overlay {
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.3);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
