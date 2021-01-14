import Vue from 'vue'

Vue.prototype.$msgs = {
    validations: {
        required: () => 'Campo requerido.',
        email: () => 'No es un email válido.',
        minLength: min => `Debe tener al menos ${min} letras.`,
        maxLength: max => `Debe tener menos de ${max} letras.`,
        alphaNum: () => 'Sólo puede contener letras y números.',
        containsUppercase: () => 'Debe contener una letra mayúscula.',
        containsLowercase: () => 'Debe contener una letra minúscula.',
        containsNumber: () => 'Debe contener un número.',
        containsSpecial: () => 'Debe contener un carácter especial: #?!@$%^&*-.',
        sameAsPassword: () => 'Las contraseñas no coinciden.',
        nameIsUnique: () => 'Este nombre de usuario no está disponible.',
        emailIsUnique: () => 'Este email no está disponible.'
    },
    errors: {
        500: 'Ups! Algo fue mal. Inténtalo de nuevo más tarde. Si el problema continua ponte en contacto con nosotros.',
        auth: {
            1: 'Usuario y/o contraseña incorrectos.'
        },
        user: {
            1: 'Este usuario no está disponible.',
            2: 'Este email ya está en uso.'
        }
    }
}
