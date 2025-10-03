export default {
    data () {
        return {
            currentYear: null
        }
    },
    
    filters: {
        euro(value) {
            return `${value}€`
        },
        imageUrl(path) {
            console.log(process.env)
            // Get the full url to the image
            // on the backend
            // return `${process.env.MEDIA_PATH}${path}`
            return `http://127.0.0.1:8000/media/${path}`
        }
    }
}
