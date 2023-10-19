import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

const baseURL = process.env.API_BASE_URL

const mainApiClient = Axios.create({
  baseURL,
})

export const axiosInstanceCache = setupCache(mainApiClient)
