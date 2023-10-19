import { connectToMongoDB } from 'lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
  const collectionName = process.env.NEW_PRODUCTS_COLLECTION

  try {
    const database = await connectToMongoDB()

    if (database) {
      const products = await database
        .collection(collectionName)
        .find({})
        .sort({ name: -1 })
        .toArray()

      return NextResponse.json(products, { status: 200 })
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
