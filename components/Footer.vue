<template>
    <footer class="ve-footer">
        <Container class="ve-footer__container">
            <div class="ve-footer__wrapper">
                <div class="ve-footer__top">
                    <ButtonDefault
                        tag="button"
                        variant="secondary"
                        size="small"
                        icon="angle-up"
                        @click.native="backToTop"
                    />
                </div>
                <div class="ve-footer__inner">
                    <a href="https://www.google.es" class="ve-footer__social" target="__blank">
                        <VeIcon
                            class="ve-footer__social-icon"
                            :social="true"
                            symbol="instagram"
                        />
                    </a>
                    <a href="https://www.google.es" class="ve-footer__social" target="__blank">
                        <VeIcon
                            :social="true"
                            class="ve-footer__social-icon"
                            symbol="youtube"
                        />
                    </a>
                    <a href="https://www.google.es" class="ve-footer__social" target="__blank">
                        <VeIcon
                            :social="true"
                            class="ve-footer__social-icon"
                            symbol="twitter"
                        />
                    </a>
                    <a href="https://www.google.es" class="ve-footer__social" target="__blank">
                        <VeIcon
                            :social="true"
                            class="ve-footer__social-icon"
                            symbol="facebook"
                        />
                    </a>
                </div>
                <div class="ve-footer__wrap">
                    <div class="ve-footer__links">
                        <NuxtLink to="/" class="ve-footer__link">
                            <TextDefault class="ve-footer__link-text">
                                Contacto
                            </TextDefault>
                        </NuxtLink>
                        <NuxtLink to="/" class="ve-footer__link">
                            <TextDefault class="ve-footer__link-text">
                                Equipo
                            </TextDefault>
                        </NuxtLink>
                        <NuxtLink to="/" class="ve-footer__link">
                            <TextDefault class="ve-footer__link-text">
                                Publicidad / Advertising
                            </TextDefault>
                        </NuxtLink>
                        <NuxtLink to="/" class="ve-footer__link">
                            <TextDefault class="ve-footer__link-text">
                                Privacidad
                            </TextDefault>
                        </NuxtLink>
                        <NuxtLink to="/" class="ve-footer__link">
                            <TextDefault class="ve-footer__link-text">
                                Términos y condiciones
                            </TextDefault>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </Container>
    </footer>
</template>

<script>
    import Container from '@/components/Container'
    import ButtonDefault from '@/components/Button'
    import VeIcon from '@/components/IconDefault'
    import TextDefault from '@/components/Text'

    export default {
        components: {
            Container,
            ButtonDefault,
            VeIcon,
            TextDefault
        },
        methods: {
            backToTop () {
                window.scroll({
                    left: 0,
                    top: 0,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<style lang="scss">
  .ve-footer {
    position: relative;
    z-index: var(--z-index-bishop);
    background-color: var(--color-bg-one);
    box-shadow: var(--shadow);

    @include breakpoint($bp) {
      padding-left: em(56px);
    }

    &__wrapper {
      display: flex;
      flex-direction: column;

      @include breakpoint(768px) {
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
      }
    }

    &__inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding-top: em(24px);
      padding-bottom: em(24px);

      @include breakpoint(768px) {
        justify-content: flex-start;
        padding-top: em(8px);
        padding-bottom: em(8px);
      }

      @include breakpoint($bp) {
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    &__social {
      padding: em(16px);
      transition: color 0.3s;

      &:first-of-type {
        @include breakpoint(768px) {
          margin-left: em(-16px);
        }
      }

      &.is-active,
      &:active,
      &:focus,
      &:hover {
        color: var(--color-text-two);
      }

      &-icon {
        font-size: em(24px);
      }
    }

    &__top {
      @include breakpoint(768px down) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: em(32px);
      }

      @include breakpoint(768px) {
        order: 2;
        margin-top: 0;
        margin-left: auto;
      }

      @include breakpoint($bp) {
        order: 4;
        margin-left: em(32px);
      }
    }

    &__wrap {
      padding-top: em(24px);
      padding-bottom: em(24px);
      display: flex;
      flex-direction: column;
      border-top: 1px solid var(--color-border);

      @include breakpoint(768px) {
        order: 3;
        width: 100%;
        padding-top: em(8px);
        padding-bottom: em(8px);
      }

      @include breakpoint($bp) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: auto;
        border-top: 0;
        margin-left: auto;
      }
    }

    &__links {
      @include breakpoint(768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    &__link {
      padding-top: em(16px);
      padding-bottom: em(16px);
      transition: color 0.3s;

      &.is-active,
      &:active,
      &:focus,
      &:hover {
        color: var(--color-primary);
        text-decoration: underline;
      }

      @include breakpoint(768px down) {
        text-align: center;
        display: block;
      }

      &:not(:last-child) {
        @include breakpoint(768px) {
          margin-right: em(40px);
        }
      }

      @include breakpoint($bp) {
        padding-top: 0;
        padding-bottom: 0;
      }

      &-text {
        font-size: em(14px);
        font-weight: 600;
      }
    }
  }
</style>
