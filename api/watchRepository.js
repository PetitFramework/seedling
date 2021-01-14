export default $axios => ({
    getNews (params) {
        return $axios.get('/watches/news')
    },
    bySlug ({ slug }) {
        return $axios.get(`/watch/${slug}`)
    }
})
