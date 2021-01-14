export default $axios => ({
    getAll (params) {
        return $axios.get('/collections/')
    },
    bySlug ({ slug }) {
        return $axios.get(`/collections/${slug}`)
    }
})
