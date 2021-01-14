export default function ({ $axios, redirect, store, error }) {
    $axios.setHeader('Authorization', `Bearer ${store.getters['auth/accessToken']}`)

    $axios.onError((e) => {
        const code = parseInt(e.response && e.response.status)
        const cause = e.response && e.response.data && e.response.data.cause

        if (code === 401 && cause === 'token') {
            redirect('/error-token')
        }

        if (code === 500) {
            error({ statusCode: 500 })
        }
    })
}
