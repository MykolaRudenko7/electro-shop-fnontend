const {
  TEST_EMAIL,
  TEST_PASSWORD,
  TEST_SIGN_UP_NAME,
  TEST_SIGN_UP_MOBILE_NUMBER,
  TEST_REFRESH_TOKEN,
  TEST_ACCESS_TOKEN,
  TEST_HASH_PASSWORD,
  TEST_USER_ID,
  TEST_ACTIVATION_LINK,
} = process.env

export const userRegistrationServiceMock = {
  userLoginResponse: {
    data: [
      {
        accessToken: TEST_ACCESS_TOKEN,
        message: 'Log in successfully',
        refreshToken: TEST_REFRESH_TOKEN,
        success: true,
        user: {
          activationlink: TEST_ACTIVATION_LINK,
          email: TEST_EMAIL,
          isActivated: false,
          lockUntil: null,
          loginAttempts: 0,
          mobileNumber: TEST_SIGN_UP_MOBILE_NUMBER,
          name: TEST_SIGN_UP_NAME,
          password: TEST_HASH_PASSWORD,
          __v: 0,
          _id: TEST_USER_ID,
        },
      },
    ],
    status: 200,
  },
  signUpUserRequest: {
    name_newUser: TEST_SIGN_UP_NAME,
    email_newUser: TEST_PASSWORD,
    password_newUser: TEST_PASSWORD,
    confirmPassword_newUser: TEST_PASSWORD,
    mobileNumber_newUser: TEST_SIGN_UP_MOBILE_NUMBER,
  },
  badSignUpUserRequest: {
    name_newUser: TEST_SIGN_UP_NAME,
    email_newUser: 'wrongEmail@gmail.com',
    password_newUser: 'wrongPassword',
    confirmPassword_newUser: 'wrongPassword',
    mobileNumber_newUser: '+wrongNumber',
  },
  signInUserRequest: {
    email_signIn: TEST_EMAIL,
    password_signIn: TEST_PASSWORD,
  },
  badSignInUserRequest: {
    email_signIn: TEST_EMAIL,
    password_signIn: 'wrongPassword',
  },
  logOutUserResponse: { success: true, message: 'Log out successfully' },

  errorSignInResponse: { status: 400, message: 'User with email does not exist' },
  errorSignUpResponse: { status: 400, message: 'User with this email or phone already exists' },
  errorLogOutResponse: { status: 400, message: 'Network Error' },
  unauthorizedErrorResponse: { status: 401, message: 'User is not authorized' },
}
