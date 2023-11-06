import { axiosInstanceCache } from 'axios/mainInstances'

const registerUserURL = '/api/auth/register'

export default class UserRegistrationService {
  static async registerUser(data) {
    const response = await axiosInstanceCache.post(registerUserURL, data)

    if (response.status !== 201) {
      throw new Error('Failed to register user. Please try again')
    }
  }
}
