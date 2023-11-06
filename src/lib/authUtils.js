import bcrypt from 'bcryptjs'
import User from 'models/User'
import { connectToMongoDB } from 'lib/db.js'

export async function findUserByEmail(email) {
  await connectToMongoDB()

  return User.findOne({ email })
}

export async function validateUserPassword(user, inputPassword) {
  if (user) {
    const isInputPasswordCorrect = await bcrypt.compare(inputPassword, user.password)

    if (isInputPasswordCorrect) {
      return user
    }

    throw new Error('Wrong Credentials!')
  } else {
    throw new Error('User not found!')
  }
}
