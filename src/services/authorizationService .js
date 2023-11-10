import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { connectToMongoDB } from 'lib/db'
import User from 'models/User'

const { JWT_SECRET } = process.env
const isProduction = process.env.NODE_ENV === 'production'

if (!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET environment variable')
}

export default class AuthorizationService {
  static generateAuthToken(_id) {
    return jwt.sign({ _id }, JWT_SECRET, { expiresIn: '7d' })
  }

  static async setAuthCookies(value) {
    cookies().set({
      name: 'auth-token',
      value,
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'strict' : 'lax',
      maxAge: value ? 604800 : 0,
    })
  }

  static async clearAuthCookies() {
    cookies().set({
      name: 'auth-token',
      value: '',
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'strict' : 'lax',
      maxAge: 0,
    })
  }

  static async isUserAuthorized() {
    const token = cookies().get('auth-token')?.value

    if (!token) {
      return null
    }

    const data = jwt.verify(token, JWT_SECRET)

    if (typeof data !== 'string') {
      try {
        await connectToMongoDB().catch((err) => {
          throw new Error(err)
        })

        const user = await User.findById(data._id)

        return user
      } catch (error) {
        return null
      }
    }

    return null
  }
}
