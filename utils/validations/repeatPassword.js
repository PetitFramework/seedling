import { sameAs, required } from 'vuelidate/lib/validators'

export default () => ({
    required,
    sameAsPassword: sameAs('password')
})
