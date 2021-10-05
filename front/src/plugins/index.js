import client from '../axiosclient'
import api from './api'

export default {
    install: (Vue) => {
        Vue.prototype.$api = {
            'global': api(client)
        }
    }
}
