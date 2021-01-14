<template>
    <div clas="ve-page-error dark-mode">
        <div class="ve-page-error__inner">
            <Picture v-if="!image" class="ve-page-error__bg" :src="image" />
            <Container class="ve-page-error__container">
                <div class="ve-page-error__box">
                    <div class="ve-page-error__title">
                        <TextDefault tag="h1" class="ve-page-error__title-text">
                            {{ title }}
                        </TextDefault>
                    </div>
                    <TextDefault tag="p" class="ve-page-error__text">
                        {{ text }}
                    </TextDefault>
                    <div v-if="button" class="ve-page-error__btn">
                        <Button to="/" :text="button" variant="primary" shadow />
                    </div>
                    <TextDefault tag="p" class="ve-page-error__contact">
                        Si el problema continua ponte en <a href="mailto:info@vostokeurope.shop">contacto con nosotros</a>.
                    </TextDefault>
                </div>
            </Container>
        </div>
    </div>
</template>

<script>
    import Picture from '@/components/Picture'
    import Container from '@/components/Container'
    import TextDefault from '@/components/Text'
    import Button from '@/components/Button'

    export default {
        components: {
            Picture,
            Container,
            TextDefault,
            Button
        },
        props: {
            image: {
                type: String,
                default: undefined
            },
            title: {
                type: String,
                default: undefined
            },
            text: {
                type: String,
                default: undefined
            },
            button: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .ve-page-error {
    &__inner {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      position: fixed;
      left: 0;
      top: 0;
    }

    &__bg {
      z-index: 1;
      pointer-events: none;
      grid-column: 1/2;
      grid-row: 1/2;
      height: 100%;
    }

    &__container {
      z-index: 2;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-column: 1/2;
      grid-row: 1/2;
    }

    &__title {
      margin-bottom: em(32px);

      &-text {
        font-weight: 900;
        font-size: em(30px);
        color: var(--color-text);

        @include breakpoint(768px) {
          font-size: em(60px);
        }
      }

      span {
        display: inline-flex;
      }
    }

    &__box {
      padding-top: em(48px);
      padding-bottom: em(104px);
    }

    &__text {
      color: var(--color-text-two);
      font-weight: 600;
      max-width: em(680px);

      @include breakpoint(768px) {
        font-size: em(20px);
      }
    }

    &__btn {
      margin-top: em(48px);
    }

    &__contact {
      font-size: em(14px);
      font-weight: 600;
      margin-top: em(56px);

      a {
        color: var(--color-primary);
      }
    }
  }
</style>
