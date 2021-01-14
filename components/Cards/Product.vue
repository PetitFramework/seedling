<template>
    <Container>
        <div class="card-product">
            <div class="card-product__heading">
                <TextDefault class="card-product__description">
                    <div>{{ product.description }}</div>
                </TextDefault>
                <DetailsPrice
                    class="card-product__price"
                    :price="product.price"
                    :discount="product.discount"
                    :stock="product.stock"
                />
            </div>
            <DetailsSize
                :width="product.width"
                :height="product.height"
                :thickness="product.thickness"
            />
            <DetailsCalibre
                :calibres="product.calibres"
            />
            properties: <div>{{ product.properties }}</div>

            gender: <div>{{ getSafetyProp('gender', 'name') }}</div>
            case: <div>{{ getSafetyProp('case', 'name') }}</div>
            glass: <div>{{ getSafetyProp('glass', 'name') }}</div>
            resistance: <div>{{ getSafetyProp('resistance', 'name') }}atm {{ getSafetyProp('resistance', 'name') * 10 }}m</div>
        </div>
    </Container>
</template>

<script>
    import TextDefault from '@/components/Text'
    import Container from '@/components/Container'
    import DetailsSize from '@/components/Details/Size'
    import DetailsPrice from '@/components/Details/Price'
    import DetailsCalibre from '@/components/Details/Calibre'

    export default {
        components: {
            TextDefault,
            Container,
            DetailsSize,
            DetailsPrice,
            DetailsCalibre
        },
        props: {
            product: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            getSafetyProp (parent, key) {
                return this.product[parent] ? this.product[parent][key] : ''
            }
        }
    }
</script>

<style lang="scss">
  .card-product {
    display: grid;
    padding: 10px 0;

    &__heading {
      display: grid;
      grid-template-columns: 1fr 150px;
      padding: 20px 0;
      align-items: center;
    }

    &__price {
      justify-self: end;
      align-self: start;
    }

    &__description {
      line-height: 1.1;
      font-size: 12px;

      @include breakpoint($bp) {
        font-size: 14px;
      }
    }
  }
</style>
