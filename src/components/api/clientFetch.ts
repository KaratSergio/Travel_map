import axios from 'axios'

export const clientFetch = axios.create({
  // baseURL: 'https://back-for-vue-js.onrender.com/'
  baseURL: 'http://localhost:5000'
})
