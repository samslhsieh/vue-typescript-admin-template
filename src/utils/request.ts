import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { AuthModule } from '@/store/modules/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
  config => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (AuthModule.token) {
      config.headers['X-Access-Token'] = AuthModule.token
      config.headers.Authorization = `Bearer ${AuthModule.token}`
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  response => {
    // Some example codes here:
    // code == 20000: success
    // code == 50001: invalid access token
    // code == 50002: already login in other place
    // code == 50003: access token expired
    // code == 50004: invalid user (user not exist)
    // code == 50005: username or password is incorrect
    // You can change this part for your own usage.
    return response.data
  },
  error => {
    const { code, message } = error.response.data

    switch (code) {
      case 50008:
      case 50012:
      case 50014:
        // TODO: i18n
        MessageBox.confirm('你已被登出，可以取消繼續留在頁面，或者重新登入', '確定登出', {
          confirmButtonText: '重新登入',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          AuthModule.ResetToken()
          location.reload() // To prevent bugs from vue-router
        })
        break

      default:
        Message({
          message: message || error.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
        break
    }

    return Promise.reject(new Error(message || error.message || 'Error'))
  }
)

export default service
