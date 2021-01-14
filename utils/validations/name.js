import { required, minLength, maxLength, helpers } from 'vuelidate/lib/validators'
const alphaNum = helpers.regex('alphaNum', /^[0-9a-zñáéíóúüàèìòùç ]+$/i)

export default isUnique => ({
    required,
    alphaNum,
    minLength: minLength(3),
    maxLength: maxLength(16),
    isUnique: value => isUnique
})
