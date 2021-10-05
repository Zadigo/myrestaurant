import client from '../axiosclient'

export default {
    install: (Vue) => {
        Vue.prototype.$api = {client}
    }
}
