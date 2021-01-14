<template>
    <ul class="ve-nav-list">
        <li v-for="nav in navs" :key="nav.to" class="ve-nav-list__item">
            <NuxtLink :to="nav.to" class="ve-nav-list__link ve-nav-list__link--home">
                <TextDefault class="ve-nav-list__link-text" @click.native="onClick">
                    {{ nav.title }}
                </TextDefault>
            </NuxtLink>
        </li>
    </ul>
</template>

<script>
    import TextDefault from '@/components/Text'

    export default {
        components: {
            TextDefault
        },
        data () {
            return {
                navs: [
                    {
                        title: 'Inicio',
                        to: '/'
                    },
                    {
                        title: 'Colecciones',
                        to: '/collekciya'
                    },
                    {
                        title: 'Ofertas',
                        to: '/offers'
                    }
                ]
            }
        },
        methods: {
            onClick () {
                this.$emit('onClick')
            }
        }
    }
</script>

<style lang="scss">
  .ve-nav-list {
    @include breakpoint($bp down) {
      padding-top: em(16px);
      padding-bottom: em(16px);
      height: 100%;
      width: calc(100% + #{em(40px)});
      overflow: hidden auto;
    }

    @include breakpoint($bp) {
      display: flex;
    }

    &__link {
      display: block;
      padding: em(16px) em(80px) em(16px) em(40px);
      transition: color 0.3s;

      @include breakpoint($bp) {
        padding: em(16px);
      }

      &:active,
      &:focus,
      &:hover {
        color: var(--color-text-two);
      }

      &.is-active,
      &.nuxt-link-exact-active,
      &.nuxt-link-active:not(&--home) {
        color: var(--color-primary);
      }

      &-text {
        font-size: em(14px);
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
</style>
