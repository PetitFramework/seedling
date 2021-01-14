import AuthRepository from '@/api/authRepository'
import UserRepository from '@/api/userRepository'
import CollectionRepository from '@/api/collectionRepository'
import WatchRepository from '@/api/watchRepository'

export default $axios => ({
    auth: AuthRepository($axios),
    user: UserRepository($axios),
    collection: CollectionRepository($axios),
    watch: WatchRepository($axios)
})
