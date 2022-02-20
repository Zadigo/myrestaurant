export default ($axios) => ({
    getProducts: () => {
        return $axios({
            url: '/products',
            method: 'get'
        })
    },
    getMenus: () => {
        return $axios({
            url: '/menus',
            method: 'get'
        })
    },
    getDrinks: () => {
        return $axios({
            url: '/drinks',
            method: 'get'
        })
    },

    orders: {
        new: (payload, firstname, lastname, telephone) => {
            return $axios({
                url: '/pick-ups/new',
                method: 'post',
                data: {
                    menus: payload.menus,
                    products: payload.products,
                    drinks: payload.drinks,
                    firstname: firstname,
                    lastname: lastname,
                    telephone: telephone
                }
            })
        },

        list: () => {
            return $axios({
                url: '/pick-ups',
                method: 'get'
            })
        },

        get: (id) => {
            return $axios({
                url: `/pick-ups/${id}`,
                method: 'get'
            })
        },
        
        cancel: (id) => {
            return $axios({
                url: `/pick-ups/${id}/cancel`,
                method: 'get'
            })
        }
    }
})
