import { axiosInstanceCache } from 'axios/mainInstances'

export default class ProductsService {
  static async fetchLaptops() {
    const response = await axiosInstanceCache.get('/laptops')

    return response.data[0].laptops
  }

  static async fetchNewProducts() {
    const response = await axiosInstanceCache.get('/newProducts')

    return response.data[0].newProducts
  }
}
