export const state = () => ({
    user: {}
})

export const getters = {
    user: state => state.user
}

export const mutations = {
    SET_USER (state, payload) {
        state.user = payload
    },
    DELETE_USER (state) {
        state.user = {}
    }
}

export const actions = {
    async setUser ({ commit, dispatch }, { id, error }) {
        try {
            const { data } = await this.$repositories.user.getUser(id)
            commit('SET_USER', data)
        } catch (err) {
            dispatch('auth/logout', {}, { root: true })
            error({ statusCode: 500 })
        }
    },
    deleteUser ({ commit }) {
        commit('DELETE_USER')
    }
}
