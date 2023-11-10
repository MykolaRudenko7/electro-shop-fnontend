import User from 'models/User'

export async function checkUserByEmail(email_newUser) {
  return User.findOne({ email: email_newUser })
}

export async function checkUserByPhone(mobileNumber_newUser) {
  return User.findOne({ mobileNumber: mobileNumber_newUser })
}
