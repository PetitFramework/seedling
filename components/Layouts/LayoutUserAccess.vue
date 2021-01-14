<template>
    <div class="ve-layout-user-access">
        <PictureDefault class="ve-layout-user-access__picture" src="/img/user-access/login.jpg" />
        <div class="ve-layout-user-access__content">
            <div class="ve-layout-user-access__actions">
                <ButtonDefault to="/" variant="secondary" icon="angle-left" />
                <TextDefault class="ve-layout-user-access__text">
                    {{ text }}
                    <NuxtLink class="ve-layout-user-access__link" :to="link">
                        {{ textLink }}
                    </NuxtLink>
                </TextDefault>
            </div>
            <div class="ve-layout-user-access__box">
                <TitleDefault v-if="title" class="ve-layout-user-access__title" tag="h1" size="small">
                    {{ title }}
                </TitleDefault>
                <template v-if="enabledSocial">
                    <div class="ve-layout-user-access__social">
                        <ButtonDefault
                            :href="createGoogleUrl()"
                            variant="google"
                            :social="true"
                            icon="google"
                            size="big-icon"
                        />
                    </div>
                    <div class="ve-layout-user-access__or">
                        <TextDefault class="ve-layout-user-access__or-text">
                            O también
                        </TextDefault>
                    </div>
                </template>
                <slot />
                <div v-if="errors.length" class="ve-layout-user-access__errors">
                    <MessageBox type="error">
                        <ValidateMsg v-for="error in errors" :key="error" class="ve-layout-user-access__error">
                            {{ error }}
                        </ValidateMsg>
                    </MessageBox>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PictureDefault from '@/components/Picture'
    import ButtonDefault from '@/components/Button'
    import TitleDefault from '@/components/Title'
    import TextDefault from '@/components/Text'
    import ValidateMsg from '@/components/ValidateMsg'
    import MessageBox from '@/components/MessageBox'
    import queryString from 'query-string'

    export default {
        components: {
            PictureDefault,
            ButtonDefault,
            TitleDefault,
            TextDefault,
            ValidateMsg,
            MessageBox
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            textLink: {
                type: String,
                default: ''
            },
            link: {
                type: String,
                default: ''
            },
            errors: {
                type: Array,
                default: () => []
            },
            enabledSocial: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            createGoogleUrl () {
                return `${this.$config.GOOGLE_AUTH_ENDPOINT}?${queryString.stringify({
                    client_id: this.$config.GOOGLE_AUTH_ID,
                    redirect_uri: this.$config.GOOGLE_AUTH_REDIRECT_URI,
                    scope: [
                        'https://www.googleapis.com/auth/userinfo.email',
                        'https://www.googleapis.com/auth/userinfo.profile'
                    ].join(' '),
                    response_type: 'code',
                    access_type: 'offline',
                    prompt: 'consent'
                })}`
            }
        }
    }
</script>

<style lang="scss">
  .ve-layout-user-access {
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    // overflow: hidden;

    @include breakpoint($bp) {
      grid-template-columns: 1fr 2fr;
    }

    &__picture {
      @include breakpoint($bp down) {
        display: none;
      }
    }

    &__content {
      z-index: var(--z-index-knight);
      padding: em(16px);
      display: flex;
      flex-direction: column;
      background-color: var(--color-bg-one);
      // overflow-y: auto;

      @include breakpoint(480px) {
        padding: em(32px) em(48px);
      }
    }

    &__text {
      color: var(--color-text-two);
      font-weight: 600;
    }

    &__link {
      color: var(--color-primary);
      font-weight: 700;

      &:active,
      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }

    &__actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__box {
      width: 100%;
      max-width: em(400px);
      margin-left: auto;
      margin-right: auto;
      padding-top: em(48px);
      padding-bottom: em(48px);

      @include breakpoint($bp) {
        margin-top: auto;
        margin-bottom: auto;
      }
    }

    &__title {
      margin-bottom: em(32px);
    }

    &__social {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: em(16px);
    }

    &__or {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto 1fr;
      grid-gap: em(16px);
      margin-top: em(32px);
      margin-bottom: em(32px);

      &::before,
      &::after {
        content: "";
        height: em(1px);
        background-color: var(--color-border);
        display: block;
      }

      &-text {
        font-size: em(12px);
        font-weight: 600;
      }
    }

    &__errors {
      margin-top: em(24px);
    }
  }
</style>
