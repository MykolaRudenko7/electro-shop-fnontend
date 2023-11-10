import { axiosInstanceCache } from 'axios/mainInstances'
import { userAuthorizationPaths } from 'data/shared/endpointConfig'

const { logOutUrl, signInUrl, signUpUrl, userInfoUrl } = userAuthorizationPaths

export default class UserRegistrationService {
  static async logOutUser() {
    const response = await axiosInstanceCache.post(logOutUrl)

    return response
  }

  static async signInUser(data) {
    const response = await axiosInstanceCache.post(signInUrl, data)

    return response
  }

  static async signUpUser(data) {
    const response = await axiosInstanceCache.post(signUpUrl, data)

    return response
  }

  static async getUserInfo() {
    const response = await axiosInstanceCache.get(userInfoUrl)

    return response
  }
}
