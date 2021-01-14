<template>
    <UserAccessLayout
        class="ve-register"
        title="Crear una nueva cuenta"
        text="¿Tienes cuenta?"
        text-link="Inicia Sesión"
        link="/login"
        :errors="errors"
        :enabled-social="!socialRegister"
    >
        <form class="ve-register__form" @submit.prevent="register">
            <div class="ve-register__input">
                <InputDefault v-model.trim="$v.name.$model" :class="{ 'has-errors': $v.name.$error }" variant="secondary" required>
                    Usuario
                    <template #errors>
                        <ValidateMsg v-if="!$v.name.required" :msg="$msgs.validations.required()" />
                        <ValidateMsg v-if="!$v.name.minLength" :msg="$msgs.validations.minLength($v.name.$params.minLength.min)" />
                        <ValidateMsg v-if="!$v.name.maxLength" :msg="$msgs.validations.maxLength($v.name.$params.maxLength.max)" />
                        <ValidateMsg v-if="!$v.name.alphaNum" :msg="$msgs.validations.alphaNum()" />
                        <ValidateMsg v-if="!$v.name.isUnique" :msg="$msgs.validations.nameIsUnique()" />
                    </template>
                </InputDefault>
            </div>
            <div v-if="!socialRegister" class="ve-register__input">
                <InputDefault
                    v-model.trim="$v.email.$model"
                    type="email"
                    :class="{ 'has-errors': $v.email.$error }"
                    variant="secondary"
                    required
                    :readonly="socialRegister"
                >
                    Email
                    <template #errors>
                        <ValidateMsg v-if="!$v.email.required" :msg="$msgs.validations.required()" />
                        <ValidateMsg v-if="!$v.email.email" :msg="$msgs.validations.email()" />
                        <ValidateMsg v-if="!$v.email.isUnique" :msg="$msgs.validations.emailIsUnique()" />
                    </template>
                </InputDefault>
            </div>
            <div v-if="!socialRegister" class="ve-register__input">
                <InputDefault
                    v-model.trim="$v.password.$model"
                    :class="{ 'has-errors': $v.password.$error }"
                    variant="secondary"
                    type="password"
                    required
                >
                    Contraseña
                    <template #box>
                        <div class="ve-register__strength">
                            <StrengthLevel :levels="maxLevel" :strength="getStrength" />
                        </div>
                    </template>
                    <template #errors>
                        <ValidateMsg v-if="!$v.password.required" :msg="$msgs.validations.required()" />
                        <ValidateMsg v-if="!$v.password.containsUppercase" :msg="$msgs.validations.containsUppercase()" />
                        <ValidateMsg v-if="!$v.password.containsLowercase" :msg="$msgs.validations.containsLowercase()" />
                        <ValidateMsg v-if="!$v.password.containsNumber" :msg="$msgs.validations.containsNumber()" />
                        <ValidateMsg v-if="!$v.password.containsSpecial" :msg="$msgs.validations.containsSpecial()" />
                        <ValidateMsg v-if="!$v.password.minLength" :msg="$msgs.validations.minLength($v.password.$params.minLength.min)" />
                    </template>
                </InputDefault>
            </div>
            <div v-if="!socialRegister" class="ve-register__input">
                <InputDefault
                    v-model.trim="$v.repeatPassword.$model"
                    :class="{ 'has-errors': $v.repeatPassword.$error }"
                    variant="secondary"
                    type="password"
                    required
                >
                    Repetir contraseña
                    <template #errors>
                        <ValidateMsg v-if="!$v.repeatPassword.required" :msg="$msgs.validations.required()" />
                        <ValidateMsg v-if="!$v.repeatPassword.sameAsPassword" :msg="$msgs.validations.sameAsPassword()" />
                    </template>
                </InputDefault>
            </div>
            <div class="ve-register__input">
                <Checkbox v-model="legal" :class="{ 'has-errors': $v.legal.$error }" variant="secondary" required>
                    <TextDefault class="ve-register__legal">
                        Acepto los <NuxtLink to="/legal/terminos-y-condiciones">términos y condiciones</NuxtLink> de Vostok Europe.
                    </TextDefault>
                    <template #errors>
                        <ValidateMsg v-if="!$v.legal.required" :msg="$msgs.validations.required()" />
                    </template>
                </Checkbox>
            </div>
            <div class="ve-register__btn">
                <ButtonDefault
                    text="Crear cuenta"
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
    import ButtonDefault from '@/components/Button'
    import TextDefault from '@/components/Text'
    import InputDefault from '@/components/Input'
    import Checkbox from '@/components/Checkbox'
    import ValidateMsg from '@/components/ValidateMsg'
    import StrengthLevel from '@/components/StrengthLevel'
    import {
        validationsName,
        validationsEmail,
        validationsPassword,
        validationsRepeatPassword,
        validationsCheckbox
    } from '@/utils/validations'

    export default {
        components: {
            UserAccessLayout,
            ButtonDefault,
            TextDefault,
            InputDefault,
            Checkbox,
            ValidateMsg,
            StrengthLevel
        },
        layout: 'empty',
        middleware: 'notAuthenticated',
        data () {
            return {
                name: '',
                email: '',
                password: '',
                repeatPassword: '',
                accessToken: '',
                refreshToken: '',
                legal: false,
                errors: [],
                maxLevel: 4,
                nameIsUnique: true,
                emailIsUnique: true,
                network: '',
                socialID: '',
                loading: false
            }
        },
        computed: {
            getStrength () {
                const {
                    containsUppercase,
                    containsLowercase,
                    containsNumber,
                    containsSpecial,
                    minLength
                } = this.$v.password

                const strengthLevel = [
                    containsUppercase,
                    containsLowercase,
                    containsNumber,
                    containsSpecial,
                    minLength
                ].filter(validation => validation).length

                return !minLength && strengthLevel >= this.maxLevel ? strengthLevel - 1 : !this.password ? 0 : strengthLevel
            },
            socialRegister () {
                return !!this.$route.query.email
            }
        },
        watch: {
            name (value) {
                this.nameIsUnique = true
                this.name = value ? value.replace(/\s\s+/g, ' ') : ''
            },
            email (value) {
                this.emailIsUnique = true
            }
        },
        validations () {
            return {
                name: validationsName(this.nameIsUnique),
                email: validationsEmail(this.emailIsUnique),
                password: validationsPassword(),
                repeatPassword: validationsRepeatPassword(),
                legal: validationsCheckbox()
            }
        },
        created () {
            if (this.socialRegister) {
                const randomPassword = Math.random().toString(36) + Math.random().toString(36).toUpperCase()
                this.name = this.$route.query.name
                this.email = this.$route.query.email
                this.accessToken = this.$route.query.accessToken
                this.refreshToken = this.$route.query.refreshToken
                this.socialId = this.$route.query.socialId
                this.network = this.$route.query.network
                this.password = randomPassword
                this.repeatPassword = randomPassword
                this.$v.name.$touch()
            }
        },
        methods: {
            register () {
                this.errors = []
                this.nameIsUnique = true
                this.emailIsUnique = true
                this.$v.$touch()

                if (!this.$v.$invalid && !this.loading) {
                    this.loading = true
                    this.$store.dispatch('auth/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        socialId: this.socialId,
                        network: this.network,
                        accessToken: this.accessToken,
                        refreshToken: this.refreshToken
                    }).then((response) => {
                        this.loading = false
                        if (response.status === 200) this.$router.push('/')
                        if (response.status === 500) this.errors.push(this.$msgs.errors[500])
                        if (response.data.errors) {
                            response.data.errors.forEach(({ original }) => {
                                if (original.args.code === 1) this.nameIsUnique = false
                                if (original.args.code === 2) this.emailIsUnique = false
                            })
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="scss">
  .ve-register {
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
      color: var(--color-primary);
      font-weight: 600;
      font-size: em(14px);

      &:active,
      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }

    &__input {
      //
    }

    &__legal {
      font-size: em(14px);
      font-weight: 600;
      color: var(--color-text-two);

      a {
        color: var(--color-primary);

        &:active,
        &:focus,
        &:hover {
          text-decoration: underline;
        }
      }
    }

    &__strength {
      margin-bottom: em(8px);
    }
  }
</style>
