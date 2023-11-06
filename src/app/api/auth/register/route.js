import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { connectToMongoDB } from 'lib/db'
import User from 'models/User'

export const POST = async (request) => {
  const { name_newUser, email_newUser, password_newUser, mobileNumber_newUser } =
    await request.json()

  try {
    await connectToMongoDB()
    const hashedPassword = await bcrypt.hash(password_newUser, 3)
    const newUser = new User({
      name: name_newUser,
      email: email_newUser,
      password: hashedPassword,
      mobileNumber: mobileNumber_newUser,
    })

    await newUser.save()

    return new NextResponse('User has been created', { status: 201 })
  } catch (error) {
    return new NextResponse(error.message, { status: 500 })
  }
}
