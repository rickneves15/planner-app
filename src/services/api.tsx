import axios from 'axios'

export const api = axios.create({
  // baseURL: 'localhost:8888',
  baseURL: 'http://172.31.159.121:8888',
})
