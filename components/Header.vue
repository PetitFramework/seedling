<template>
    <header class="ve-header">
        <Navigation />
        <NuxtLink to="/" class="ve-header__logo">
            <span class="ve-header__logo-big">
                <Logo />
            </span>
            <span class="ve-header__logo-icon">
                <LogoIcon />
            </span>
        </NuxtLink>
        <div class="ve-header__nav-list">
            <NavList />
        </div>
        <div class="ve-header__box">
            <HeaderSearch />
            <div v-if="this.$store.getters['auth/loggedIn']" class="ve-header__user-box">
                {{ this.$store.getters['user/user'].name }}
            </div>
            <div v-else class="ve-header__login">
                <div class="ve-header__login-icon">
                    <ButtonDefault to="/login" icon="user" size="big-icon" variant="tertiary" />
                </div>
                <div class="ve-header__login-btn">
                    <ButtonDefault
                        class="ve-header__login-btn"
                        text="Iniciar sesión"
                        size="small"
                        to="/login"
                        variant="tertiary"
                    />
                </div>
                <div class="ve-header__login-btn">
                    <ButtonDefault
                        variant="cta"
                        text="Crear cuenta"
                        to="/register"
                        size="small"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import Logo from '@/components/Logo'
    import LogoIcon from '@/components/LogoIcon'
    import Navigation from '@/components/Nav'
    import ButtonDefault from '@/components/Button'
    import NavList from '@/components/NavList'
    import HeaderSearch from '@/components/HeaderSearch'

    export default {
        components: {
            Logo,
            LogoIcon,
            Navigation,
            ButtonDefault,
            NavList,
            HeaderSearch
        }
    }
</script>

<style lang="scss">
  .ve-header {
    background-color: var(--color-bg-one);
    height: var(--header-height);
    align-items: center;
    position: sticky;
    top: 0;
    z-index: var(--z-index-queen);
    box-shadow: var(--shadow-two);
    display: grid;

    @include breakpoint(360px down) {
      grid-template-columns: 1fr auto;
    }

    @include breakpoint(360px 600px) {
      grid-template-columns: auto 1fr auto;
      padding-left: em(8px);
    }

    @include breakpoint(600px) {
      display: flex;
    }

    @include breakpoint($bp) {
      padding-left: em(16px);
    }

    &__logo {
      display: none;

      @include breakpoint(360px) {
        display: flex;
        justify-content: center;
      }

      @include breakpoint(600px down) {
        order: -1;
      }

      @include breakpoint($bp) {
        margin-right: em(32px);
      }

      &-big {
        display: flex;

        @include breakpoint(600px down) {
          display: none;
        }
      }

      &-icon {
        display: flex;

        @include breakpoint(600px) {
          display: none;
        }
      }
    }

    &__nav-list {
      @include breakpoint($bp down) {
        display: none;
      }
    }

    &__box {
      display: flex;
      align-items: center;

      @include breakpoint(600px) {
        margin-left: auto;
      }
    }

    &__user-box {
      display: flex;
      align-items: center;
    }

    &__login {
      display: flex;
      align-items: center;

      @include breakpoint($bp down) {
        justify-content: center;
      }

      @include breakpoint($bp) {
        padding-right: em(24px);
      }

      &-icon {
        padding: em(8px);

        @include breakpoint($bp) {
          display: none;
        }
      }

      &-btn {
        @include breakpoint($bp down) {
          display: none;
        }
      }
    }
  }
</style>
