import { axiosInstance } from 'axiosInstances/mainInstances'

const { LAPTOPS_ENDPOINT, NEW_PRODUCTS_ENDPOINT } = process.env

export default class ProductsService {
  static async fetchLaptops() {
    try {
      const response = await axiosInstance.get(LAPTOPS_ENDPOINT)

      return response.data
    } catch (error) {
      return null
    }
  }

  static async fetchNewProducts() {
    try {
      const response = await axiosInstance.get(NEW_PRODUCTS_ENDPOINT)

      return response.data
    } catch (error) {
      return null
    }
  }
}
