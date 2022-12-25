import axios from 'axios'

var http = axios.create({
    baseURL: 'https://book.youbaobao.xyz:18082',
    timeout: 1000 * 30,
})

http.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default http