const { MongoClient, ServerApiVersion } = require('mongodb')

const mongoDBURL = process.env.MONGODB_URL
const databaseName = process.env.DATABASE_NAME

const client = new MongoClient(mongoDBURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export async function connectToMongoDB() {
  try {
    await client.connect()
    const database = client.db(databaseName)

    return database
  } catch (error) {
    throw new Error(error)
  }
}

export default client
