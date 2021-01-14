import { required, email } from 'vuelidate/lib/validators'

export default isUnique => ({
    required,
    email,
    isUnique: value => isUnique
})
