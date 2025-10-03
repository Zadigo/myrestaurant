import Vue from 'vue'

const localStorageSettingsName = 'r'

var localStoragePlugin =  {
    install: (Vue) => {
        // This plugin simplifies quick repetive
        // tasks for the current application in
        // regards to the local storage
        // Vue.mixin({
        //     getLocalStorage() {
        //         // Get settings form the local storage
        //         return JSON.parse(localStorage.getItem(localStorageSettingsName))
        //     },
        //     getItemFromLocalStorage(key) {
        //         // Get a specific item from the settings
        //         // in the local storage
        //         return this.getLocalStorage()[key]
        //     },
        //     setToLocalStorage(key, value) {
        //         var settings = this.getLocalStorage()
        //         settings[key] = value
        //         localStorage.setItem(localStorageSettingsName, JSON.stringify(settings))
        //     }
        // })

        Vue.prototype.$localstorage = {
            all() {
                // Get all the settings from the local storage
                return JSON.parse(localStorage.getItem(localStorageSettingsName))
            },
            get(key) {
                // Get a specific item from the settings
                // in the local storage
                return this.all()[key]
            },
            update(key, value) {
                var settings = this.all()

                settings[key] = value
                localStorage.setItem(localStorageSettingsName, JSON.stringify(settings))
            }
        }
    }
}

Vue.use(localStoragePlugin)
