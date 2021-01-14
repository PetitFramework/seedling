export default $axios => ({
    login (email, password) {
        return $axios.post('/auth/login', {
            email,
            password
        })
    },

    register (name, email, password, socialId, network, accessToken, refreshToken) {
        return $axios.post('/auth/register', {
            name,
            email,
            password,
            socialId,
            network,
            accessToken,
            refreshToken
        })
    },

    social (token, network) {
        return $axios.post('/auth/social', {
            token,
            network
        })
    },

    logout () {
        return $axios.post('/auth/logout')
    },

    token (data) {
        return $axios.post('/auth/token', data)
    }
})
