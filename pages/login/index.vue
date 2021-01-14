<template>
    <UserAccessLayout
        class="ve-login"
        title="Iniciar Sesión"
        text="¿No tienes cuenta?"
        text-link="Regístrate"
        link="/register"
        :errors="errors"
    >
        <form class="ve-login__form" @submit.prevent="login">
            <div class="ve-login__input">
                <OgInput
                    v-model.trim="$v.email.$model"
                    :class="{ 'has-errors': $v.email.$error }"
                    type="email"
                    variant="secondary"
                    required
                >
                    Email
                    <template #errors>
                        <OgValidateMsg v-if="!$v.email.required" :msg="$msgs.validations.required()" />
                    </template>
                </OgInput>
            </div>
            <div class="ve-login__input">
                <OgInput
                    v-model.trim="$v.password.$model"
                    :class="{ 'has-errors': $v.password.$error }"
                    variant="secondary"
                    type="password"
                    required
                >
                    <div class="ve-login__box">
                        Contraseña
                        <OgText to="/" class="ve-login__forgot">
                            Olvidé la contraseña
                        </OgText>
                    </div>
                    <template #errors>
                        <OgValidateMsg v-if="!$v.password.required" :msg="$msgs.validations.required()" />
                    </template>
                </OgInput>
            </div>
            <div class="ve-login__btn">
                <OgButton
                    text="Iniciar sesión"
                    variant="primary"
                    type="submit"
                    :disabled="this.$v.$invalid || loading"
                    :loading="loading"
                />
            </div>
        </form>
    </UserAccessLayout>
</template>

<script>
    import UserAccessLayout from '@/components/Layouts/LayoutUserAccess'
    import OgButton from '@/components/Button'
    import OgText from '@/components/Text'
    import OgInput from '@/components/Input'
    import OgValidateMsg from '@/components/ValidateMsg'
    import { required } from 'vuelidate/lib/validators'

    export default {
        components: {
            UserAccessLayout,
            OgButton,
            OgText,
            OgInput,
            OgValidateMsg
        },
        layout: 'empty',
        middleware: 'notAuthenticated',
        data () {
            return {
                email: '',
                password: '',
                loading: false,
                errors: []
            }
        },
        validations: {
            email: { required },
            password: { required }
        },
        methods: {
            login () {
                this.errors = []
                this.$v.$touch()

                if (!this.$v.$invalid && !this.loading) {
                    this.loading = true

                    this.$store.dispatch('auth/login', {
                        email: this.email,
                        password: this.password
                    }).then((response) => {
                        this.loading = false

                        if (response.status === 200) this.$router.push('/')
                        if (response.status === 500) this.errors.push(this.$msgs.errors[500])
                        if (response.status === 401) {
                            this.email = ''
                            this.password = ''
                            this.$v.$reset()
                            this.errors.push(this.$msgs.errors.auth[response.data.args.code])
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="scss">
  .ve-login {
    &__form {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: em(24px);
    }

    &__box {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__label {
      //
    }

    &__forgot {
      font-weight: 600;
      font-size: em(14px);
      transition: color 0.3s;
      color: var(--color-text);

      &:active,
      &:focus,
      &:hover {
        color: var(--color-primary);
        text-decoration: underline;
      }
    }

    &__input {
      //
    }
  }
</style>
