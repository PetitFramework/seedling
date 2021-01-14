<template>
    <div class="ve-card-basic" @click="goTo">
        <PictureDefault class="ve-card-basic__image" :src="image" />
        <div class="ve-card-basic__overlay">
            <div class="ve-card-basic__price">
                {{ currencyService.get(price) }}
            </div>
            <div class="ve-card-basic__title">
                {{ title }}
            </div>
        </div>
    </div>
</template>

<script>
    import PictureDefault from '@/components/Picture'
    import CurrencyService from '@/utils/currency'

    export default {
        components: {
            PictureDefault
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            price: {
                type: Number,
                default: 0
            },
            to: {
                type: String,
                default: '/'
            },
            image: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                currencyService: ''
            }
        },
        created () {
            this.currencyService = new CurrencyService({})
        },
        methods: {
            goTo () {
                this.$router.push(this.to)
            }
        }
    }
</script>p

<style lang="scss">
  .ve-card-basic {
    display: grid;
    position: relative;
    height: 200px;
    border: 1px solid rgba(black, 0.1);
    border-radius: 5px;
    cursor: pointer;

    &__image,
    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 2;
    }

    &__price {
      position: absolute;
      bottom: -10px;
      right: 0;
      background-color: var(--color-primary);
      color: white;
      padding: 5px;
      font-weight: bold;
      border-radius: 5px;
    }

    &__title {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.6);
      padding: 10px;
      font-weight: bold;
      right: 0;
      font-size: 12px;
      border-radius: 5px;
    }

    &__image {
      object-fit: cover;
    }
  }
</style>
