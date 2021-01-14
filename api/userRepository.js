export default $axios => ({
    getUser (id, params) {
        return $axios.get(`/users/${id}`, { params })
    }
})
