import cookie from 'cookie'

export default async function ({ store, req }) {
    let sessionToken = null

    if (process.server && req.headers.cookie) {
        sessionToken = cookie.parse(req.headers.cookie).sessionToken
    }

    await store.dispatch('auth/refreshToken', sessionToken)
}
