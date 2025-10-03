import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations('cashRegisterModule', ['setItem'])
    }
}
