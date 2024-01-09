import axios from 'axios'
import UserRegistrationService from 'src/services/userRegistrationService'
import { userRegistrationServiceMock } from '__mocks__/userRegistrationServiceMock'

const {
  userLoginResponse,
  logOutUserResponse,
  signInUserRequest,
  signUpUserRequest,
  errorSignInResponse,
  errorSignUpResponse,
  errorLogOutResponse,
  unauthorizedErrorResponse,
  badSignInUserRequest,
  badSignUpUserRequest,
} = userRegistrationServiceMock

jest.mock('axios', () => {
  return {
    create: jest.fn(() => axios),
    post: jest.fn(() => Promise.resolve()),
    get: jest.fn(() => Promise.resolve()),
  }
})

describe('Auth service', () => {
  it('should return user data after successful sign in request', async () => {
    axios.post = jest.fn().mockResolvedValue(userLoginResponse)

    const userData = await UserRegistrationService.signInUser(signInUserRequest)

    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(userData).toEqual(userLoginResponse)
    expect(userData).toMatchSnapshot()
  })

  it('should return an object with error status and message if sign-in request is incorrect', async () => {
    axios.post.mockImplementationOnce(() => Promise.reject(errorSignInResponse))

    await expect(UserRegistrationService.signInUser(badSignInUserRequest)).rejects.toMatchObject(
      errorSignInResponse,
    )
    expect(badSignInUserRequest).toMatchSnapshot()
  })

  it('should return user data after successful sign up request', async () => {
    axios.post = jest.fn().mockResolvedValue(userLoginResponse)

    const userData = await UserRegistrationService.signUpUser(signUpUserRequest)

    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(userData).toEqual(userLoginResponse)
    expect(userData).toMatchSnapshot()
  })

  it('should return an object with error status and message if sign-up request is incorrect', async () => {
    axios.post.mockImplementationOnce(() => Promise.reject(errorSignUpResponse))

    await expect(UserRegistrationService.signUpUser(badSignUpUserRequest)).rejects.toMatchObject(
      errorSignUpResponse,
    )
    expect(badSignUpUserRequest).toMatchSnapshot()
  })

  it('should return an object with success status and message if log out user request success', async () => {
    axios.post = jest.fn().mockResolvedValue(logOutUserResponse)

    const logOut = await UserRegistrationService.logOutUser()

    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(logOut).toEqual(logOutUserResponse)
    expect(logOut).toMatchSnapshot()
  })

  it('should return an object with error status and message if log out user request is incorrect', async () => {
    axios.post.mockImplementationOnce(() => Promise.reject(errorLogOutResponse))

    await expect(UserRegistrationService.logOutUser()).rejects.toMatchObject(errorLogOutResponse)
  })

  it('should return user data and new tokens after successful refresh request', async () => {
    axios.post = jest.fn().mockResolvedValue(userLoginResponse)

    const refresh = await UserRegistrationService.refresh()

    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(refresh).toEqual(userLoginResponse)
    expect(refresh).toMatchSnapshot()
  })

  it('should return an object with error status and message if refresh request is incorrect', async () => {
    axios.post.mockImplementationOnce(() => Promise.reject(unauthorizedErrorResponse))

    await expect(UserRegistrationService.refresh()).rejects.toMatchObject(unauthorizedErrorResponse)
  })

  it('should return user data after getUserInfo request successfully', async () => {
    axios.get = jest.fn().mockResolvedValue(userLoginResponse)

    const userData = await UserRegistrationService.getUserInfo()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(userData).toEqual(userLoginResponse)
    expect(userData).toMatchSnapshot()
  })

  it('should return an object with error status and message if getUserInfo request is incorrect', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(unauthorizedErrorResponse))

    await expect(UserRegistrationService.getUserInfo()).rejects.toMatchObject(
      unauthorizedErrorResponse,
    )
  })
})
