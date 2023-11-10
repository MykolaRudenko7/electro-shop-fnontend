import mongoose from 'mongoose'
import { hash } from 'bcryptjs'

const { Schema, model, models } = mongoose
const usersCollection = process.env.USERS_COLLECTION

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minLength: [4, 'Name should be at least 4 characters'],
    maxLength: [30, 'Name, should be less than 30 characters'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
    minLength: [6, 'Password should be at least 6 characters long'],
  },
  mobileNumber: {
    type: String,
    unique: true,
    required: true,
  },
  loginAttempts: { type: Number, required: true, default: 0 },
  lockUntil: { type: Number },
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  this.password = await hash(this.password, 10)

  return next()
})

const User = models.User || model('User', userSchema, usersCollection)

export default User
