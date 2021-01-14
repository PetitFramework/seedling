<template>
    <div class="details-price">
        <div v-if="getDiscountPrice()" class="details-price__wrapper">
            <div class="details-price__old">
                {{ currencyService.get(price) }}
            </div>
            <div class="details-price__price">
                {{ currencyService.get(getDiscountPrice()) }}
            </div>
        </div>
        <div v-else class="details-price__wrapper">
            <div class="details-price__price">
                {{ currencyService.get(price) }}
            </div>
        </div>
        <ButtonDefault
            :disabled="stock === 0"
            class="details-price__buttonx"
            variant="cta"
            text="Comprar"
            size="big"
        />
        <TextDefault v-if="stock === 0" class="details-price__stock">
            No tenemos stock
        </TextDefault>
    </div>
</template>

<script>
    import CurrencyService from '@/utils/currency'
    import TextDefault from '@/components/Text'
    import ButtonDefault from '@/components/Button'

    export default {
        components: {
            TextDefault,
            ButtonDefault
        },
        props: {
            price: {
                type: Number,
                default: 0
            },
            discount: {
                type: Number,
                default: 0
            },
            stock: {
                type: Number,
                default: 0
            }
        },
        computed: {
            currencyService () {
                return new CurrencyService({})
            }
        },
        methods: {
            getDiscountPrice () {
                return this.discount
                    ? (this.price - ((this.discount / 100) * this.price))
                    : false
            }
        }
    }
</script>

<style lang="scss">
  .details-price {
    max-width: 120px;
    display: grid;
    grid-gap: 5px;

    &__button {
      margin: 0 auto;
    }

    &__wrapper {
      justify-self: center;
      align-items: center;
      text-align: center;
      border-radius: 5px;
      display: grid;
    }

    &__old {
      opacity: 0.8;
      position: relative;

      &::after {
        content: ' ';
        display: block;
        position: absolute;
        height: 2px;
        width: 80px;
        bottom: 48%;
        background-color: black;
        opacity: 0.4;
        transform: rotate(-4deg);
      }
    }

    &__price {
      font-weight: bold;
      font-size: 1.2em;
    }

    &__stock {
      max-width: 150px;
      text-align: center;
      line-height: 1.1;
      display: block;

      strong {
        color: var(--color-primary);
        font-weight: bold;
      }
    }
  }
</style>
