import http from '@/service/http'

const exampleApi = {
  login(params) {
    return http.post('/login', params)
  },
}
export default exampleApi
