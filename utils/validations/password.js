import { required, minLength } from 'vuelidate/lib/validators'

const passwordStrength = (value) => {
    const strengthLevel = 2
    const validation = {
        containsUppercase: containsUppercase(value, false),
        containsLowercase: containsLowercase(value, false),
        containsNumber: containsNumber(value, false),
        containsSpecial: containsSpecial(value, false)
    }
    const validations = Object.values(validation).filter(validation => validation)
    const currentStrength = validations.length
    return strengthLevel < currentStrength
}

const containsUppercase = (value, args) => args ? /[A-Z]/.test(value) || passwordStrength(value) : /[A-Z]/.test(value)
const containsLowercase = (value, args) => args ? /[a-z]/.test(value) || passwordStrength(value) : /[a-z]/.test(value)
const containsNumber = (value, args) => args ? /[0-9]/.test(value) || passwordStrength(value) : /[0-9]/.test(value)
const containsSpecial = (value, args) => args ? /[#?!@$%^&*-.,]/.test(value) || passwordStrength(value) : /[#?!@$%^&*-.,]/.test(value)

export default () => ({
    required,
    minLength: minLength(8),
    containsUppercase,
    containsLowercase,
    containsNumber,
    containsSpecial
})
