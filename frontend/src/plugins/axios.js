import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept-Language'] = 'fr,en-US;q=0.9,en-GB;q=0.9'

const client = axios.default.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    timeout: 1000,
    withCredentials: true
})

export default client
