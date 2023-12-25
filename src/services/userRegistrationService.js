import { axiosInstance } from 'axios/mainInstances'

const signUpUrl = process.env.NEXT_PUBLIC_SIGN_UP_ENDPOINT
const signInUrl = process.env.NEXT_PUBLIC_SIGN_IN_ENDPOINT
const getUserInfoUrl = process.env.NEXT_PUBLIC_USER_INFO_ENDPOINT
const logOutUrl = process.env.NEXT_PUBLIC_LOG_OUT_ENDPOINT
const refreshUrl = process.env.REFRESH_ENDPOINT

export default class UserRegistrationService {
  static async signUpUser(data) {
    const response = await axiosInstance.post(signUpUrl, data)

    return response
  }

  static async signInUser(data) {
    const response = await axiosInstance.post(signInUrl, data)

    return response
  }

  static async getUserInfo() {
    const response = await axiosInstance.get(getUserInfoUrl)

    return response
  }

  static async logOutUser() {
    const response = await axiosInstance.post(logOutUrl)

    return response
  }

  static async refresh() {
    const response = await axiosInstance.post(refreshUrl)

    return response
  }
}
