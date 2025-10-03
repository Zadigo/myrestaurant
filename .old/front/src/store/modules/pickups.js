var _ = require('lodash')

var pickupsModule = {
    namespaced: true,

    state: () => ({
        pickups: [
            {
                action: '15 min',
                headline: 'Brunch this weekend?',
                subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                title: 'Ali Connors',
                completed: false,
                paid: false
            },
            {
                action: '2 hr',
                headline: 'Summer BBQ',
                subtitle: `Wish I could come, but I'm out of town this weekend.`,
                title: 'me, Scrott, Jennifer',
                completed: false,
                paid: true
            },
            {
                action: '6 hr',
                headline: 'Oui oui',
                subtitle: 'Do you have Paris recommendations? Have you ever been?',
                title: 'Sandra Adams',
                completed: false,
                paid: false
            },
            {
                action: '12 hr',
                headline: 'Birthday gift',
                subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
                title: 'Trevor Hansen',
                completed: false,
                paid: false
            }
        ]
    }),

    mutations: {
        setPickups(state, payload) {
            state.products = payload
        }
    },

    getters: {
        noneCompleted(state) {
            return _.filter(state.pickups, ['completed', false])
        },

        completed(state) {
            return _.filter(state.pickups, ['completed', true])
        }        
    }
}

export default pickupsModule
