export default (ctx, inject) => {
    inject('core', {
        config: {
            postsPerPage: 5,
            repliesPerPage: 5
        }
    })
}
