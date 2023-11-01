import mongoose from 'mongoose'

const mongoDBURL = process.env.MONGODB_URL

if (!mongoDBURL) {
  throw new Error('MONGO_URL is not defined.')
}

let cached = global.mongoose

if (!cached) {
  cached = { conn: null }
  global.mongoose = cached
}

export const connectToMongoDB = async () => {
  if (cached.conn) {
    return cached.conn
  }
  cached.conn = await mongoose.connect(mongoDBURL)

  return cached.conn
}
