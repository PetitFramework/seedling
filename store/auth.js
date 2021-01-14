export const state = () => ({
    accessToken: null,
    loggedIn: false,
    user: {},
    errors: []
})

export const getters = {
    accessToken: state => state.accessToken,
    loggedIn: state => state.loggedIn,
    user: state => state.user,
    errors: state => state.errors
}

export const mutations = {
    SET_TOKEN (state, payload) {
        state.accessToken = payload
    },
    DELETE_TOKEN (state, payload) {
        state.accessToken = null
    },
    SET_LOGGED_IN (state, payload) {
        state.loggedIn = payload
    },
    SET_ERROR (state, payload) {
        state.errors.push(payload)
    },
    DELETE_ERRORS (state, payload) {
        state.errors = []
    },
    SET_USER (state, payload) {
        state.user = payload
    },
    DELETE_USER (state, payload) {
        state.user = {}
    }
}

export const actions = {
    async refreshToken ({ commit, getters, dispatch }, sessionToken) {
        if (getters.loggedIn || sessionToken) {
            try {
                const { data } = await this.$repositories.auth.token({
                    accessToken: getters.accessToken
                })

                if (data.accessToken) {
                    commit('SET_TOKEN', data.accessToken)
                    commit('SET_USER', data.user)
                    commit('SET_LOGGED_IN', true)
                } else {
                    throw new Error('Error with login')
                }
            } catch (error) {
                dispatch('logout', sessionToken)
            }
        }
    },

    login ({ commit }, { email, password }) {
        return this.$repositories.auth.login(email, password).then((response) => {
            commit('SET_TOKEN', response.data.accessToken)
            commit('SET_USER', response.data.user)
            commit('SET_LOGGED_IN', true)
            return response
        }).catch(({ response }) => {
            return response
        })
    },

    social ({ commit }, { token, network }) {
        return this.$repositories.auth.social(token, network).then((response) => {
            if (response && response.data && response.data.registered) {
                commit('SET_TOKEN', response.data.accessToken)
                commit('SET_USER', response.data.user)
                commit('SET_LOGGED_IN', true)
            }
            return response
        }).catch(({ response }) => {
            return response
        })
    },

    logout ({ commit, getters, dispatch }, sessionToken) {
        if (getters.loggedIn || sessionToken) {
            this.$repositories.auth.logout()
            commit('DELETE_TOKEN')
            commit('DELETE_USER')
            commit('SET_LOGGED_IN', false)
            dispatch('user/deleteUser', {}, { root: true })
        }
    },

    register ({ commit }, { name, email, password, socialId, network, accessToken, refreshToken }) {
        return this.$repositories.auth.register(name, email, password, socialId, network, accessToken, refreshToken).then((response) => {
            commit('SET_TOKEN', response.data.accessToken)
            commit('SET_USER', response.data.user)
            commit('SET_LOGGED_IN', true)
            return response
        }).catch(({ response }) => {
            return response
        })
    }
}
