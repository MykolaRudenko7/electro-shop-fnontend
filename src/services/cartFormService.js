import { axiosInstance } from 'axiosInstances/mainInstances'

const submitCartFormUrl = process.env.NEXT_PUBLIC_SUBMIT_CART_FORM

export default class CartService {
  static async submitCart(data) {
    const response = await axiosInstance.post(submitCartFormUrl, data)

    return response.data
  }
}
