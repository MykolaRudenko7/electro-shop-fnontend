import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

const { API_BASE_URL } = process.env

const mainApiClient = Axios.create({
  baseURL: API_BASE_URL,
})

export const axiosInstanceCache = setupCache(mainApiClient)
