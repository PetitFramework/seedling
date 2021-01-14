export default async function ({ store, error }) {
    if (store.getters['auth/loggedIn']) {
        await store.dispatch('user/setUser', { id: store.getters['auth/user'].id, error })
    } else {
        store.dispatch('user/deleteUser')
    }
}
