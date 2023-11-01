import { axiosInstanceCache } from 'axios/mainInstances'

const { NEW_PRODUCTS_ENDPOINT, LAPTOPS_ENDPOINT } = process.env

export default class ProductsService {
  static async fetchLaptops() {
    const response = await axiosInstanceCache.get(LAPTOPS_ENDPOINT)

    return response.data
  }

  static async fetchNewProducts() {
    const response = await axiosInstanceCache.get(NEW_PRODUCTS_ENDPOINT)

    return response.data
  }
}
