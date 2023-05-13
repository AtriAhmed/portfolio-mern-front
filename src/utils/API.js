/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default {
  getLoginStatus: async () => {
    return await axios.get('/login/status')
  },
  postUserLogin: async (user) => {
    return await axios.post('/login', user)
  },
  getLoggedOut: async () => {
    return await axios.get('/logout')
  }
}
