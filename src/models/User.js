import mongoose from 'mongoose'

const { Schema, model, models } = mongoose
const usersCollection = process.env.USERS_COLLECTION

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
)

const User = models.User || model('User', userSchema, usersCollection)

export default User
